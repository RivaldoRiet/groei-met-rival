import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";
import { CartSidebar } from "./CartSidebar";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Instagram, Youtube, Music, Music2, Linkedin, Facebook, Twitter, Send, Tv, MessageSquare, Film, Star, Video, Search, MessageCircle } from "lucide-react";
import { getServicesByPlatform, serviceCategories } from "@/data/services";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Instagram, Youtube, Music, Music2: Music2, Linkedin, Facebook, Twitter, Send, Tv, MessageSquare, Film, Star, Video, Search, MessageCircle
    };
    return icons[iconName] || Instagram;
  };

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

  const handleAuthModal = () => {
    const currentPath = window.location.pathname;
    setShowAuthModal(true);
    // Store current path in localStorage for redirect after auth
    localStorage.setItem('auth_redirect_path', currentPath);
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
            <img 
              src="/lovable-uploads/28bec140-6b90-4d8f-bb77-8b29ac665450.png" 
              alt="BoostDirect Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-foreground">BoostDirect</h1>
              <p className="text-xs text-muted-foreground hidden md:block">Premium Social Media Marketing</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {serviceCategories.map((category) => (
              <div
                key={category.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                  <span>{category.name}</span>
                  <ChevronDown size={16} />
                </button>
                
                {activeDropdown === category.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="grid gap-2">
                        {category.platforms.map((platform) => {
                          const IconComponent = getIconComponent(platform.icon);
                          const platformServices = getServicesByPlatform(platform.name);
                          return (
                            <Link
                              key={platform.name}
                              to={platform.path}
                              className="flex items-center space-x-3 p-2 hover:bg-muted rounded-lg transition-colors"
                            >
                              <IconComponent size={16} />
                              <div className="flex-1">
                                <div className="font-medium text-sm">{platform.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {platformServices.length} services beschikbaar
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
            <CartSidebar />
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">NL</span>
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
              <Button variant="hero" size="sm" onClick={handleAuthModal}>
                Inloggen
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
            {serviceCategories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="px-2 py-1 text-sm font-semibold text-muted-foreground">
                  {category.name}
                </div>
                {category.platforms.map((platform) => {
                  const IconComponent = getIconComponent(platform.icon);
                  return (
                    <Link
                      key={platform.name}
                      to={platform.path}
                      className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{platform.name}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
            
            <div className="pt-4 border-t border-border mt-4">
              <div className="flex items-center justify-between mb-3">
                <CartSidebar />
                <span className="text-sm text-muted-foreground">NL</span>
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
                <Button variant="hero" onClick={handleAuthModal} className="w-full">
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
        <AuthModal 
          onClose={() => setShowAuthModal(false)} 
          redirectPath={localStorage.getItem('auth_redirect_path') || undefined}
        />
      )}
    </header>
  );
};

export default Header;