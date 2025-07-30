import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { ShoppingCart, CreditCard, Shield, ArrowLeft, Trash2 } from 'lucide-react';
import { trackPurchase } from '@/lib/analytics';

const Checkout = () => {
  const { items, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      navigate('/');
    }
  }, [items.length, navigate]);

  const handleCheckout = async () => {
    if (!user) {
      toast({
        title: "Inloggen vereist",
        description: "Je moet ingelogd zijn om een bestelling te plaatsen.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    setIsLoading(true);

    try {
      // Create orders for each cart item
      const orderPromises = items.map(async (item) => {
        const { data: order, error } = await supabase
          .from('orders')
          .insert({
            user_id: user.id,
            service_type: item.service.title,
            platform: item.service.platform,
            quantity: item.quantity,
            target_url: item.targetUrl,
            price_cents: Math.round(item.totalPrice * 100),
            order_notes: item.orderNotes || null,
          })
          .select()
          .single();

        if (error) throw error;
        return order;
      });

      const orders = await Promise.all(orderPromises);
      
      // Track purchases for analytics
      const totalValue = getTotalPrice();
      trackPurchase({
        orderId: orders.map(o => o.id).join(','),
        value: totalValue,
        currency: 'EUR',
        items: items.map(item => ({
          item_id: item.service.id,
          item_name: item.service.title,
          category: item.service.platform,
          quantity: item.quantity,
          price: item.pricePerUnit,
        })),
      });

      // Create a single Stripe checkout session for all orders
      const { data, error: functionError } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          orderId: orders.map(o => o.id).join(','),
          amount: Math.round(totalValue * 100),
          currency: 'eur',
          description: `Bestelling - ${items.length} service(s)`,
        },
      });

      if (functionError) throw functionError;

      if (data?.sessionUrl) {
        // Clear cart after successful order creation
        clearCart();
        window.location.href = data.sessionUrl;
      } else {
        throw new Error('Kon geen checkout sessie aanmaken');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Fout bij checkout",
        description: "Er is een fout opgetreden. Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft size={16} className="mr-2" />
            Terug
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart size={24} className="text-primary" />
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>
          <p className="text-muted-foreground">
            Controleer je bestelling en ga verder naar betaling
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart size={20} />
                  Je Bestelling ({items.length} item{items.length !== 1 ? 's' : ''})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.service.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                        {item.service.icon}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold">{item.service.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {item.service.platform}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {item.quantity.toLocaleString()} {item.service.unit}
                              </Badge>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                        
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p className="break-all">
                            <span className="font-medium">URL:</span> {item.targetUrl}
                          </p>
                          {item.orderNotes && (
                            <p>
                              <span className="font-medium">Notities:</span> {item.orderNotes}
                            </p>
                          )}
                          <p>
                            <span className="font-medium">Kwaliteit:</span> {item.selectedOption}
                          </p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-sm text-muted-foreground">
                            €{item.pricePerUnit.toFixed(4)} per {item.service.unit}
                          </span>
                          <span className="font-bold text-lg">
                            €{item.totalPrice.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {index < items.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Overzicht</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotaal:</span>
                    <span>€{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>BTW (21%):</span>
                    <span>€{(getTotalPrice() * 0.21).toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Totaal:</span>
                  <span>€{(getTotalPrice() * 1.21).toFixed(2)}</span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full h-12 text-base"
                >
                  {isLoading ? (
                    "Wordt verwerkt..."
                  ) : (
                    <>
                      <CreditCard size={18} className="mr-2" />
                      Betalen €{(getTotalPrice() * 1.21).toFixed(2)}
                    </>
                  )}
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Shield size={16} />
                  Veilige betaling via Stripe
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold">Waarom BoostDirect?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ 24/7 Klantenservice</li>
                    <li>✓ Snelle levering</li>
                    <li>✓ 100% Veilig</li>
                    <li>✓ Geld terug garantie</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;