import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Service } from "@/data/services";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

interface OrderFlowProps {
  service: Service;
  user: User | null;
  onClose: () => void;
}

export default function OrderFlow({ service, user, onClose }: OrderFlowProps) {
  const [quantity, setQuantity] = useState(service.minimum_order);
  const [targetUrl, setTargetUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("standard");
  const [orderNotes, setOrderNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getPricePerUnit = () => {
    if (selectedOption === "standard") {
      return service.price_per_unit;
    }
    return service.price_options?.[selectedOption] || service.price_per_unit;
  };

  const totalPrice = quantity * getPricePerUnit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Inloggen vereist",
        description: "Je moet ingelogd zijn om een bestelling te plaatsen.",
        variant: "destructive",
      });
      return;
    }

    if (quantity < service.minimum_order || quantity > service.maximum_order) {
      toast({
        title: "Ongeldige hoeveelheid",
        description: `Hoeveelheid moet tussen ${service.minimum_order} en ${service.maximum_order} liggen.`,
        variant: "destructive",
      });
      return;
    }

    if (!targetUrl.trim()) {
      toast({
        title: "URL vereist",
        description: "Voer de URL van je post/profiel in.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create order in database
      const { data: order, error } = await supabase
        .from('orders')
        .insert({
          user_id: user.id,
          service_type: service.title,
          platform: service.platform,
          quantity,
          target_url: targetUrl,
          price_cents: Math.round(totalPrice * 100),
          order_notes: orderNotes.trim() || null,
        })
        .select()
        .single();

      if (error) throw error;

      // Call Stripe checkout edge function
      const { data, error: functionError } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          orderId: order.id,
          amount: Math.round(totalPrice * 100),
          currency: 'eur',
          description: `${service.title} - ${quantity} ${service.unit}`,
        },
      });

      if (functionError) throw functionError;

      if (data?.sessionUrl) {
        window.location.href = data.sessionUrl;
      } else {
        throw new Error('Kon geen checkout sessie aanmaken');
      }
    } catch (error) {
      console.error('Order error:', error);
      toast({
        title: "Fout bij bestelling",
        description: "Er is een fout opgetreden. Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">{service.icon}</span>
            {service.title}
          </CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="quantity">Hoeveelheid {service.unit}</Label>
              <div className="space-y-3 mt-2">
                <Slider
                  value={[quantity]}
                  onValueChange={(value) => setQuantity(value[0])}
                  min={service.minimum_order}
                  max={service.maximum_order}
                  step={Math.max(1, Math.floor((service.maximum_order - service.minimum_order) / 1000))}
                  className="w-full"
                />
                <Input
                  id="quantity"
                  type="number"
                  min={service.minimum_order}
                  max={service.maximum_order}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(service.maximum_order, Math.max(service.minimum_order, parseInt(e.target.value) || service.minimum_order)))}
                  className="text-center font-medium"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Min: {service.minimum_order.toLocaleString()}, Max: {service.maximum_order.toLocaleString()}
              </p>
            </div>

            {service.price_options && (
              <div>
                <Label htmlFor="option">Opties</Label>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standaard</SelectItem>
                    {Object.keys(service.price_options).map((option) => (
                      <SelectItem key={option} value={option}>
                        {option} (+€{(service.price_options![option] * quantity).toFixed(2)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="targetUrl">Post/Profiel URL</Label>
              <Input
                id="targetUrl"
                type="url"
                placeholder={`https://${service.platform.toLowerCase()}.com/...`}
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="notes">Opmerkingen (optioneel)</Label>
              <Textarea
                id="notes"
                placeholder="Speciale instructies..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            <div className="bg-muted p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Totaal:</span>
                <span className="text-xl font-bold text-primary">
                  €{totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                €{getPricePerUnit().toFixed(4)} per {service.unit}
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Annuleren
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? "Bezig..." : "Bestellen"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}