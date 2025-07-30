import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const CartSidebar = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check user authentication status
  React.useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleCheckout = () => {
    if (!user) {
      toast({
        title: "Inloggen vereist",
        description: "Je moet ingelogd zijn om een bestelling te plaatsen.",
        variant: "destructive",
      });
      setIsOpen(false);
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Winkelwagen leeg",
        description: "Voeg eerst items toe aan je winkelwagen.",
        variant: "destructive",
      });
      return;
    }

    setIsOpen(false);
    navigate('/checkout');
  };

  const updateItemQuantity = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = Math.max(1, currentQuantity + change);
    updateQuantity(id, newQuantity);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <ShoppingCart size={16} />
          {getTotalItems() > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart size={20} />
            Winkelwagen ({getTotalItems()})
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Je winkelwagen is leeg</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.service.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.service.platform}</p>
                        <p className="text-xs text-muted-foreground mt-1 break-all">
                          {item.targetUrl}
                        </p>
                        {item.orderNotes && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Notitie: {item.orderNotes}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItemQuantity(item.id, item.quantity, -1)}
                          className="h-6 w-6 p-0"
                        >
                          <Minus size={12} />
                        </Button>
                        <span className="text-sm font-medium w-16 text-center">
                          {item.quantity.toLocaleString()}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateItemQuantity(item.id, item.quantity, 1)}
                          className="h-6 w-6 p-0"
                        >
                          <Plus size={12} />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">€{item.totalPrice.toFixed(2)}</p>
                        <p className="text-xs text-muted-foreground">
                          €{item.pricePerUnit.toFixed(4)} per {item.service.unit}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              {!user && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm">
                  <p className="text-yellow-800 font-medium">Inloggen vereist voor checkout</p>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="font-semibold">Totaal:</span>
                <span className="text-xl font-bold">€{getTotalPrice().toFixed(2)}</span>
              </div>
              <Button 
                onClick={handleCheckout} 
                className="w-full"
                disabled={!user}
              >
                Naar Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};