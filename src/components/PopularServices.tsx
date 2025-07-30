import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { services, getServiceById } from "@/data/services";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import OrderFlow from "./OrderFlow";
import AuthModal from "./AuthModal";
import { Instagram, Youtube, Music, Music2, Linkedin, Facebook, Twitter, Send, Tv, MessageSquare, Film, Star, Video, Search, MessageCircle } from "lucide-react";

const PopularServices = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Instagram, Youtube, Music, Music2: Music2, Linkedin, Facebook, Twitter, Send, Tv, MessageSquare, Film, Star, Video, Search, MessageCircle
    };
    return icons[iconName] || Instagram;
  };

  // Get user state
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const popularServices = [
    services.find(s => s.id === "instagram-views")!,
    services.find(s => s.id === "youtube-views")!,
    services.find(s => s.id === "spotify-plays")!,
    services.find(s => s.id === "tiktok-views")!,
  ].filter(Boolean);

  const handleOrderClick = (serviceId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setSelectedService(serviceId);
  };

  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Populaire Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ontdek onze meest gevraagde social media marketing services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {popularServices.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            return (
            <div key={index} className="bg-card rounded-xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-xl md:text-2xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <IconComponent size={24} />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    Vanaf €{(service.price_per_unit * 1000).toFixed(2)}
                  </span>
                </div>
                
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Min: {service.minimum_order.toLocaleString()}</div>
                  <div>Max: {service.maximum_order.toLocaleString()}</div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                  onClick={() => handleOrderClick(service.id)}
                >
                  Bestellen
                </Button>
              </div>
            </div>
            );
          })}
        </div>

        {selectedService && (
          <OrderFlow
            service={getServiceById(selectedService)!}
            user={user}
            onClose={() => setSelectedService(null)}
          />
        )}

        {showAuthModal && (
          <AuthModal onClose={() => setShowAuthModal(false)} />
        )}
      </div>
    </section>
  );
};

export default PopularServices;