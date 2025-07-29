import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-accent/20 to-primary/10 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Wij Helpen Je Om Je{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Social Media Te Laten Groeien
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ontdek meer dan 120 services door te klikken op het "Nieuwe Bestelling" menu
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/instagram">
              <Button variant="hero" size="xl" className="min-w-48">
                Nieuwe Bestelling
              </Button>
            </Link>
            <a href="#platforms">
              <Button variant="outline" size="xl" className="min-w-48">
                Bekijk Diensten
              </Button>
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Snelle Groei</h3>
              <p className="text-muted-foreground">
                Zie je volgers en engagement snel stijgen met onze bewezen methoden
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Echte Gebruikers</h3>
              <p className="text-muted-foreground">
                Alle services worden geleverd door echte, actieve social media gebruikers
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Doelgericht</h3>
              <p className="text-muted-foreground">
                Bereik je doelgroep met gerichte marketing strategieën en services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;