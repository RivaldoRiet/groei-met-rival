import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { getServicesByPlatform } from "@/data/services";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg p-2 font-bold text-lg md:text-xl">
              B
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground">BoostDirect</h1>
              <p className="text-xs text-muted-foreground hidden md:block">Premium Social Media Marketing</p>
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

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">NL</span>
              <span className="text-sm font-medium">€0,00</span>
            </div>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm hidden lg:block">
                  Welkom, {user.user_metadata?.full_name || user.email}
                </span>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  Uitloggen
                </Button>
              </div>
            ) : (
              <Button variant="hero" size="sm" onClick={() => setShowAuthModal(true)}>
                Inloggen
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                to={platform.path}
                className="flex items-center space-x-3 py-3 px-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-lg">{platform.icon}</span>
                <span className="font-medium">{platform.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">NL</span>
                <span className="text-sm font-medium">€0,00</span>
              </div>
              
              {user ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Welkom, {user.user_metadata?.full_name || user.email}
                  </p>
                  <Button variant="outline" size="sm" onClick={handleSignOut} className="w-full">
                    Uitloggen
                  </Button>
                </div>
              ) : (
                <Button variant="hero" onClick={() => setShowAuthModal(true)} className="w-full">
                  Inloggen
                </Button>
              )}
            </div>
            
            {isAdmin && (
              <Link 
                to="/admin" 
                className="block py-3 px-2 rounded-lg hover:bg-muted transition-colors font-medium text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            )}
          </div>
        )}
      </div>
      
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </header>
  );
};

export default Header;