import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const platforms = [
    {
      name: "Instagram",
      icon: "📸",
      description: "Vergroot je Instagram presence met echte followers, likes en views",
      services: ["Followers", "Likes", "Views", "Comments", "Story Views", "Reels Views"],
      link: "/instagram",
      color: "from-pink-500/10 to-purple-500/10"
    },
    {
      name: "YouTube",
      icon: "📺",
      description: "Boost je YouTube kanaal met subscribers, views en engagement",
      services: ["Subscribers", "Views", "Likes", "Comments", "Watch Time", "Shares"],
      link: "/youtube",
      color: "from-red-500/10 to-orange-500/10"
    },
    {
      name: "TikTok",
      icon: "🎵",
      description: "Ga viraal op TikTok met followers, likes en views",
      services: ["Followers", "Likes", "Views", "Comments", "Shares", "Live Views"],
      link: "/tiktok",
      color: "from-black/10 to-gray-500/10"
    },
    {
      name: "Spotify",
      icon: "🎵",
      description: "Verhoog je Spotify streams en monthly listeners",
      services: ["Streams", "Monthly Listeners", "Followers", "Playlist Adds", "Saves"],
      link: "/spotify",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      description: "Professionele groei op LinkedIn voor bedrijven en professionals",
      services: ["Connections", "Followers", "Post Likes", "Comments", "Shares", "Views"],
      link: "/linkedin",
      color: "from-blue-500/10 to-indigo-500/10"
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Snelle Levering",
      description: "Orders starten binnen 24 uur en worden snel voltooid"
    },
    {
      icon: "🔒",
      title: "100% Veilig",
      description: "Alle services zijn veilig en volgen platform richtlijnen"
    },
    {
      icon: "👥",
      title: "Echte Gebruikers",
      description: "Alleen authentieke, actieve accounts - geen bots"
    },
    {
      icon: "🎯",
      title: "Geo-Targeting",
      description: "Services beschikbaar voor specifieke landen en regio's"
    },
    {
      icon: "📊",
      title: "Live Tracking",
      description: "Volg de voortgang van je bestellingen in real-time"
    },
    {
      icon: "🛡️",
      title: "Garanties",
      description: "Refill garantie en geld-terug-garantie beschikbaar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Onze Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium social media marketing services voor alle grote platforms. Vergroot je online aanwezigheid met echte, actieve gebruikers.
              </p>
            </header>

            {/* Platform Services */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Beschikbare Platforms</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platforms.map((platform) => (
                  <Card key={platform.name} className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`bg-gradient-to-br ${platform.color} rounded-lg p-6 text-center mb-6`}>
                        <div className="text-4xl mb-3">{platform.icon}</div>
                        <h3 className="text-xl font-bold">{platform.name}</h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 text-center">
                        {platform.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <p className="font-semibold text-sm">Beschikbare Services:</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {platform.services.map((service) => (
                            <span key={service} className="bg-muted px-2 py-1 rounded text-center">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link to={platform.link}>
                        <Button className="w-full group-hover:bg-primary/90 transition-colors">
                          Bekijk Services
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Waarom BoostDirect?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Pricing Info */}
            <section className="mb-20">
              <Card>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">Transparante Prijzen</h2>
                      <p className="text-muted-foreground mb-6">
                        Onze prijzen zijn transparant en competitief. Geen verborgen kosten, geen lange contracten. 
                        Betaal alleen voor wat je bestelt en zie resultaten binnen 24-48 uur.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Vanaf €2,50 per service
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Bulk kortingen beschikbaar
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          Geen setup kosten
                        </li>
                        <li className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          30 dagen geld-terug-garantie
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-lg p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">Bereken Uw Prijs</h3>
                      <p className="text-muted-foreground mb-6 text-sm">
                        Gebruik onze calculator om direct de kosten van uw campagne te berekenen
                      </p>
                      <Button className="w-full">
                        Prijs Calculator
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-4">Klaar Om Te Beginnen?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Kies je platform, selecteer de gewenste service en zie je social media presence groeien binnen 24 uur.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                      <Button size="lg">
                        Bekijk Alle Services
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" size="lg">
                        Persoonlijk Advies
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    
  );
};

export default Services;