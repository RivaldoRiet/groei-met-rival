import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/15 rounded-full blur-xl animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Wij zijn er om je beroemd te maken!
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Sluit je aan bij duizenden tevreden klanten die hun social media groei hebben versneld met onze professionele services.
          </p>
          <Button 
            variant="secondary" 
            size="xl" 
            className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Start Nu Je Groei
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;