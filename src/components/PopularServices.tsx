import { Button } from "@/components/ui/button";

const PopularServices = () => {
  const services = [
    {
      title: "Instagram Views",
      description: "Verhoog de zichtbaarheid van je Instagram video's en Reels",
      price: "€0,70",
      min: "300",
      max: "60.000",
      icon: "📱",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "YouTube Views", 
      description: "Krijg meer views op je YouTube video's met gratis likes",
      price: "€2,90",
      min: "1000", 
      max: "10.000.000",
      icon: "📺",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "Spotify Streams",
      description: "Verhoog je Spotify streams en bereik een groter publiek", 
      price: "€1,40",
      min: "500",
      max: "10.000.000",
      icon: "🎵",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "TikTok Views",
      description: "Laat je TikTok video's viral gaan met meer views",
      price: "€0,20", 
      min: "100",
      max: "50.000.000",
      icon: "🎬",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    Vanaf {service.price}
                  </span>
                </div>
                
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>Min: {service.min}</div>
                  <div>Max: {service.max}</div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Bestellen
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;