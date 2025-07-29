import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import AuthModal from "./AuthModal";

const Header = () => {
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-lg p-2 font-bold text-xl">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Rival</h1>
              <p className="text-xs text-muted-foreground">Premium Social Media Marketing</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#nieuws" className="text-foreground hover:text-primary transition-colors">
              Nieuws
            </a>
            <a href="#over-ons" className="text-foreground hover:text-primary transition-colors">
              Over Ons
            </a>
            <a href="#geld-toevoegen" className="text-foreground hover:text-primary transition-colors">
              Geld Toevoegen
            </a>
            <a href="#diensten" className="text-foreground hover:text-primary transition-colors">
              Diensten
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
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