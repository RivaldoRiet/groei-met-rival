import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Service } from "@/data/services";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import OrderFlow from "./OrderFlow";
import AuthModal from "./AuthModal";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleOrderClick = (serviceId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setSelectedService(serviceId);
  };

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group">
        <CardHeader className="pb-4">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform`}>
            {service.icon}
          </div>
          
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
            {service.title}
          </h3>
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {service.description}
          </p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">
                €{(service.price_per_unit * 1000).toFixed(2)}
              </span>
              <span className="text-xs text-muted-foreground">per 1000</span>
            </div>
            
            <div className="text-xs text-muted-foreground space-y-1">
              <div>Min: {service.minimum_order.toLocaleString()}</div>
              <div>Max: {service.maximum_order.toLocaleString()}</div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            onClick={() => handleOrderClick(service.id)}
          >
            Bestellen
          </Button>
        </CardFooter>
      </Card>

      {selectedService && (
        <OrderFlow
          service={service}
          user={user}
          onClose={() => setSelectedService(null)}
        />
      )}

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
};

export default ServiceCard;