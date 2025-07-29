import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Service } from "@/data/services";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import OrderFlow from "./OrderFlow";
import AuthModal from "./AuthModal";
import { Rocket, ShoppingCart, Heart, Eye, Users, ThumbsUp, MessageCircle, Share, Bookmark, Play, Smartphone, Film, LucideIcon, Instagram, Youtube, Music, Linkedin } from "lucide-react";

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

  const getIcon = (iconName: string): LucideIcon => {
    const iconMap: { [key: string]: LucideIcon } = {
      "Heart": Heart,
      "Eye": Eye,
      "Users": Users,
      "ThumbsUp": ThumbsUp,
      "MessageCircle": MessageCircle,
      "Share": Share,
      "Bookmark": Bookmark,
      "Play": Play,
      "Smartphone": Smartphone,
      "Film": Film,
      "Instagram": Instagram,
      "Youtube": Youtube,
      "Music": Music,
      "Linkedin": Linkedin,
      "👁️": Eye,
      "❤️": Heart,
      "👥": Users,
      "👍": ThumbsUp,
      "💬": MessageCircle,
      "📤": Share,
      "🔖": Bookmark,
      "▶️": Play,
      "📱": Smartphone,
      "🎬": Film,
      "📺": Play
    };
    return iconMap[iconName] || Heart;
  };

  const handleOrderClick = (serviceId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    setSelectedService(serviceId);
  };

  const IconComponent = getIcon(service.icon);

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 group hover:scale-[1.02]">
        <CardHeader className="pb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
            <IconComponent size={24} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
              {service.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                {service.unit}
              </span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                {service.platform}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 pb-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
            {service.description}
          </p>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-bold text-primary">
                  €{(service.price_per_unit * 1000).toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground font-medium">per 1000 {service.unit}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="bg-background/50 rounded px-2 py-1">
                  <span className="font-medium">Min:</span> {service.minimum_order.toLocaleString()}
                </div>
                <div className="bg-background/50 rounded px-2 py-1">
                  <span className="font-medium">Max:</span> {service.maximum_order.toLocaleString()}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-2 flex items-center justify-center gap-1">
                <Rocket size={14} /> Je krijgt: <span className="font-semibold text-foreground">{service.unit}</span> voor je {service.platform.toLowerCase()} account
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="pt-0">
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors h-12 font-semibold flex items-center gap-2"
            onClick={() => handleOrderClick(service.id)}
          >
            <ShoppingCart size={16} />
            Bestellen vanaf €{(service.price_per_unit * service.minimum_order).toFixed(2)}
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