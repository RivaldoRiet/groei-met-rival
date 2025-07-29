import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Contact Opnemen
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Heeft u vragen over onze services? Ons team staat klaar om u te helpen
              </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Stuur Ons Een Bericht</h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            Voornaam *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Achternaam *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Adres *
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Onderwerp *
                        </label>
                        <select
                          id="subject"
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        >
                          <option value="">Selecteer een onderwerp</option>
                          <option value="general">Algemene vraag</option>
                          <option value="support">Technische support</option>
                          <option value="billing">Facturering</option>
                          <option value="services">Services informatie</option>
                          <option value="partnership">Partnership mogelijkheden</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Bericht *
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Beschrijf uw vraag of opmerking..."
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Bericht Versturen
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Contact Informatie</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">support@boostdirect.nl</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Telefoon</p>
                          <p className="text-sm text-muted-foreground">+31 20 123 4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Adres</p>
                          <p className="text-sm text-muted-foreground">
                            Herengracht 124<br />
                            1015 BT Amsterdam<br />
                            Nederland
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Openingstijden</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Maandag - Vrijdag</span>
                        <span className="text-muted-foreground">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Zaterdag</span>
                        <span className="text-muted-foreground">10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Zondag</span>
                        <span className="text-muted-foreground">Gesloten</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Snelle Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Voor urgente vragen kunt u ook gebruik maken van onze live chat.
                    </p>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="mt-16">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Veelgestelde Vragen</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-2">Hoe snel worden orders verwerkt?</h3>
                      <p className="text-sm text-muted-foreground">
                        De meeste orders worden binnen 24 uur gestart en voltooid binnen 1-7 dagen, afhankelijk van de service.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Zijn jullie services veilig?</h3>
                      <p className="text-sm text-muted-foreground">
                        Ja, alle onze services zijn 100% veilig en volgen de richtlijnen van de sociale media platforms.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Kan ik mijn order annuleren?</h3>
                      <p className="text-sm text-muted-foreground">
                        Orders kunnen geannuleerd worden zolang ze nog niet zijn gestart. Neem contact op voor meer informatie.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Bieden jullie garanties?</h3>
                      <p className="text-sm text-muted-foreground">
                        Ja, we bieden garanties op onze services. Details vindt u bij elke service beschrijving.
                      </p>
                    </div>
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

export default Contact;