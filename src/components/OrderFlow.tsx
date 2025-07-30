import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Service } from "@/data/services";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";
import { X, Shield, Clock, Star, TrendingUp, ShoppingCart } from "lucide-react";
import { trackAddToCart } from "@/lib/analytics";
import { useCart } from "@/contexts/CartContext";

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
  const { toast } = useToast();
  const { addToCart } = useCart();

  const getPricePerUnit = () => {

    if (selectedOption === "standard") {
      return service.price_per_unit;
    }
    return service.price_options?.[selectedOption] || service.price_per_unit;
  };

  const totalPrice = quantity * getPricePerUnit();
  const savings = quantity >= 5000 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - savings;

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();

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

    // Add item to cart
    addToCart({
      service,
      quantity,
      targetUrl: targetUrl.trim(),
      selectedOption,
      orderNotes: orderNotes.trim() || undefined,
      pricePerUnit: getPricePerUnit(),
    });

    // Track add to cart event
    trackAddToCart(service.title, service.platform, finalPrice);

    toast({
      title: "Toegevoegd aan winkelwagen",
      description: `${quantity.toLocaleString()} ${service.unit} voor ${service.title}`,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-xl`}>
              {service.icon}
            </div>
            <div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-sm">{service.platform}</CardDescription>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <Shield className="w-4 h-4 text-green-600 mx-auto mb-1" />
              <p className="text-xs text-green-700 dark:text-green-400 font-medium">Veilig</p>
            </div>
            <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
              <p className="text-xs text-blue-700 dark:text-blue-400 font-medium">Snel</p>
            </div>
            <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Star className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
              <p className="text-xs text-yellow-700 dark:text-yellow-400 font-medium">Kwaliteit</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleAddToCart} className="space-y-6">
            {/* Quantity Selection */}
            <div>
              <Label className="text-base font-semibold">Hoeveel {service.unit} wil je bestellen?</Label>
              <div className="space-y-4 mt-3">
                <Slider
                  value={[quantity]}
                  onValueChange={(value) => setQuantity(value[0])}
                  min={service.minimum_order}
                  max={service.maximum_order}
                  step={Math.max(1, Math.floor((service.maximum_order - service.minimum_order) / 1000))}
                  className="w-full"
                />
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min={service.minimum_order}
                    max={service.maximum_order}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.min(service.maximum_order, Math.max(service.minimum_order, parseInt(e.target.value) || service.minimum_order)))}
                    className="text-center font-bold text-lg"
                  />
                  <span className="text-sm text-muted-foreground font-medium">{service.unit}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Min: {service.minimum_order.toLocaleString()}</span>
                  <span>Max: {service.maximum_order.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Quality Options */}
            {service.price_options && (
              <div>
                <Label className="text-base font-semibold">Kies je kwaliteit</Label>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">
                      <div className="flex justify-between items-center w-full">
                        <span>Standaard</span>
                        <span className="text-green-600 font-medium">€{(service.price_per_unit * quantity).toFixed(2)}</span>
                      </div>
                    </SelectItem>
                    {Object.entries(service.price_options).map(([option, price]) => (
                      <SelectItem key={option} value={option}>
                        <div className="flex justify-between items-center w-full">
                          <span>{option}</span>
                          <span className="text-green-600 font-medium">€{(price * quantity).toFixed(2)}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground mt-1">Hogere kwaliteit = betere resultaten</p>
              </div>
            )}

            {/* URL Input */}
            <div>
              <Label className="text-base font-semibold">Link naar je {service.platform} post/profiel</Label>
              <Input
                type="url"
                placeholder={`https://${service.platform.toLowerCase()}.com/...`}
                value={targetUrl}
                onChange={(e) => setTargetUrl(e.target.value)}
                className="mt-2"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                Kopieer de volledige URL van je post of profiel
              </p>
            </div>

            {/* Optional Notes */}
            <div>
              <Label className="text-base font-semibold">Extra instructies (optioneel)</Label>
              <Textarea
                placeholder="Speciale wensen of opmerkingen..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="mt-2"
                rows={3}
              />
            </div>

            {/* Price Summary */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Subtotaal:</span>
                <span className="font-bold">€{totalPrice.toFixed(2)}</span>
              </div>
              
              {savings > 0 && (
                <div className="flex justify-between items-center text-green-600">
                  <span className="font-medium flex items-center gap-1">
                    <TrendingUp size={16} />
                    Bulk korting (10%):
                  </span>
                  <span className="font-bold">-€{savings.toFixed(2)}</span>
                </div>
              )}
              
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="text-lg font-bold">Totaal:</span>
                <span className="text-2xl font-bold text-primary">€{finalPrice.toFixed(2)}</span>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                €{getPricePerUnit().toFixed(4)} per {service.unit}
                {quantity >= 5000 && " • Inclusief 10% bulk korting!"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
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
                className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              >
                <ShoppingCart size={16} className="mr-2" />
                Toevoegen aan winkelwagen
              </Button>
            </div>

            {/* Security notice */}
            <p className="text-xs text-center text-muted-foreground">
              🛒 Item wordt toegevoegd aan je winkelwagen
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}