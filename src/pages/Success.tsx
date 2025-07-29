import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle } from "lucide-react";

export default function Success() {
  const [searchParams] = useSearchParams();
  const [orderStatus, setOrderStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const orderId = searchParams.get('order_id');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId || !sessionId) {
        setOrderStatus('error');
        return;
      }

      try {
        const { error } = await supabase
          .from('orders')
          .update({ 
            status: 'processing',
            stripe_payment_intent_id: sessionId
          })
          .eq('id', orderId);

        if (error) throw error;
        setOrderStatus('success');
      } catch (error) {
        console.error('Error updating order:', error);
        setOrderStatus('error');
      }
    };

    updateOrderStatus();
  }, [orderId, sessionId]);

  if (orderStatus === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Bestelling wordt verwerkt...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (orderStatus === 'error') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-destructive">Fout opgetreden</CardTitle>
            <CardDescription>
              Er is een probleem opgetreden met je bestelling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link to="/">Terug naar home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-green-600">Betaling geslaagd!</CardTitle>
          <CardDescription>
            Je bestelling is ontvangen en wordt nu verwerkt.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm">
              <strong>Bestelling ID:</strong> {orderId}
            </p>
            <p className="text-sm mt-2">
              Je ontvangt een e-mail met de bevestiging van je bestelling.
              De verwerking start binnen 24 uur.
            </p>
          </div>
          
          <Button asChild className="w-full">
            <Link to="/">Terug naar home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}