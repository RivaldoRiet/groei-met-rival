import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { getServicesByPlatform } from "@/data/services";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const platforms = [
    { name: "Instagram", path: "/instagram", icon: "📸" },
    { name: "YouTube", path: "/youtube", icon: "📺" },
    { name: "TikTok", path: "/tiktok", icon: "🎵" },
    { name: "Spotify", path: "/spotify", icon: "🎵" },
    { name: "LinkedIn", path: "/linkedin", icon: "💼" },
  ];

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      if (user) {
        checkAdminRole(user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin');

      setIsAdmin(roles && roles.length > 0);
    } catch (error) {
      console.error('Error checking admin role:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg p-2 font-bold text-xl">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Rival</h1>
              <p className="text-xs text-muted-foreground">Premium Social Media Marketing</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {platforms.map((platform) => {
              const platformServices = getServicesByPlatform(platform.name);
              return (
                <div
                  key={platform.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(platform.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={platform.path}
                    className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
                  >
                    <span>{platform.icon}</span>
                    <span>{platform.name}</span>
                    <ChevronDown size={16} />
                  </Link>
                  
                  {activeDropdown === platform.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
                      <div className="p-4 max-h-96 overflow-y-auto">
                        <div className="grid gap-2">
                          {platformServices.slice(0, 8).map((service) => (
                            <Link
                              key={service.id}
                              to={platform.path}
                              className="flex items-center space-x-3 p-2 hover:bg-muted rounded-lg transition-colors"
                            >
                              <span className="text-lg">{service.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-sm">{service.title}</div>
                                <div className="text-xs text-muted-foreground">
                                  Vanaf €{(service.price_per_unit * service.minimum_order).toFixed(2)}
                                </div>
                              </div>
                            </Link>
                          ))}
                          {platformServices.length > 8 && (
                            <Link
                              to={platform.path}
                              className="text-center p-2 text-sm text-primary hover:bg-muted rounded-lg transition-colors"
                            >
                              +{platformServices.length - 8} meer services →
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {isAdmin && (
              <Link to="/admin" className="text-foreground hover:text-primary transition-colors font-medium">
                Admin
              </Link>
            )}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">NL</span>
              <span className="text-sm font-medium">€0,00</span>
            </div>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm hidden md:block">
                  Welkom, {user.user_metadata?.full_name || user.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Uitloggen
                </Button>
              </div>
            ) : (
              <Button variant="hero" onClick={() => setShowAuthModal(true)}>
                Inloggen
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </header>
  );
};

export default Header;