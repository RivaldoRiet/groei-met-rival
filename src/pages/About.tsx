import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Over BoostDirect
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Jouw betrouwbare partner voor premium social media marketing services sinds 2017
              </p>
            </header>

            <div className="space-y-12">
              <section>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Onze Missie</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Bij BoostDirect geloven we in het democratiseren van social media succes. Onze missie is om bedrijven, 
                      influencers en content creators de tools en services te bieden die ze nodig hebben om hun online aanwezigheid 
                      uit te breiden met authentieke, actieve gebruikers.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Waarom BoostDirect?</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        Meer dan 8 jaar ervaring in social media marketing
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        96.731+ succesvol afgehandelde bestellingen
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        16.914+ tevreden vaste klanten
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        36.509+ positieve reviews
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">Onze Visie</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We streven ernaar de nummer één leverancier van social media marketing services te zijn in Nederland, 
                      met een focus op kwaliteit, betrouwbaarheid en klantentevredenheid. Ons doel is om elk merk te helpen 
                      zijn volledige potentieel op sociale media te bereiken.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Onze Services</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl mb-3">📸</div>
                        <h3 className="font-semibold mb-2">Instagram Marketing</h3>
                        <p className="text-sm text-muted-foreground">Followers, likes, views en meer</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-3">📺</div>
                        <h3 className="font-semibold mb-2">YouTube Growth</h3>
                        <p className="text-sm text-muted-foreground">Subscribers, views en engagement</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-3">🎵</div>
                        <h3 className="font-semibold mb-2">TikTok & Spotify</h3>
                        <p className="text-sm text-muted-foreground">Viraal gaan op alle platforms</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;