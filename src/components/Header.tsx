import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

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
            <Link to="/instagram" className="text-foreground hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link to="/youtube" className="text-foreground hover:text-primary transition-colors">
              YouTube
            </Link>
            <Link to="/tiktok" className="text-foreground hover:text-primary transition-colors">
              TikTok
            </Link>
            <Link to="/spotify" className="text-foreground hover:text-primary transition-colors">
              Spotify
            </Link>
            <Link to="/linkedin" className="text-foreground hover:text-primary transition-colors">
              LinkedIn
            </Link>
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