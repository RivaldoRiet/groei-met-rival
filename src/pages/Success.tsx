import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle, Home, Mail } from "lucide-react";

export default function Success() {
  const [searchParams] = useSearchParams();
  const [orderStatus, setOrderStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const orderId = searchParams.get('order_id');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId || !sessionId) {
        setOrderStatus('error');
        return;
      }

      try {
        // Update order status
        const { data: updatedOrder, error: updateError } = await supabase
          .from('orders')
          .update({ 
            status: 'processing',
            stripe_payment_intent_id: sessionId
          })
          .in('id', orderId.split(','))
          .select('*');

        if (updateError) throw updateError;

        // Get order details for display
        const { data: orders, error: fetchError } = await supabase
          .from('orders')
          .select('*')
          .in('id', orderId.split(','));

        if (fetchError) throw fetchError;
        
        setOrderDetails(orders);
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
              Neem contact op met onze support als dit probleem aanhoudt.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/">
                  <Home size={16} className="mr-2" />
                  Terug naar home
                </Link>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a href="mailto:support@boostdirect.nl">
                  <Mail size={16} className="mr-2" />
                  Contact Support
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
              <Link to="/">Terug naar home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalAmount = orderDetails?.reduce((sum: number, order: any) => sum + (order.price_cents / 100), 0) || 0;
  const orderCount = orderDetails?.length || 0;
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-green-600">Betaling geslaagd!</CardTitle>
          <CardDescription>
            Je bestelling{orderCount > 1 ? 'en zijn' : ' is'} ontvangen en {orderCount > 1 ? 'worden' : 'wordt'} nu verwerkt.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Bestelling ID:</strong> {orderId}
              </p>
              <p className="text-sm">
                <strong>Aantal services:</strong> {orderCount}
              </p>
              <p className="text-sm">
                <strong>Totaalbedrag:</strong> €{totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">Wat gebeurt er nu?</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>✓ Je ontvangt een bevestigingsmail</li>
              <li>✓ Verwerking start binnen 24 uur</li>
              <li>✓ Je kunt de voortgang volgen in je account</li>
              <li>✓ Bij vragen: support@boostdirect.nl</li>
            </ul>
          </div>
          
          <div className="flex gap-3">
            <Button asChild className="flex-1">
            <Button variant="outline" asChild className="flex-1">
              <a href="mailto:support@boostdirect.nl">
                <Mail size={16} className="mr-2" />
                Support
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}