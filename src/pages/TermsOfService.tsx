import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Gebruiksvoorwaarden
              </h1>
              <p className="text-lg text-muted-foreground">
                Laatst bijgewerkt: 1 januari 2025
              </p>
            </header>

            <Card>
              <CardContent className="p-8 prose prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Algemene Bepalingen</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Deze gebruiksvoorwaarden zijn van toepassing op alle diensten die worden aangeboden door BoostDirect 
                    (gevestigd te Herengracht 124, 1015 BT Amsterdam, Nederland, KvK nummer: 12345678).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Door gebruik te maken van onze diensten, gaat u akkoord met deze voorwaarden. Lees deze zorgvuldig 
                    door voordat u onze services gebruikt.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. Dienstverlening</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BoostDirect biedt social media marketing services aan, waaronder maar niet beperkt tot:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Instagram followers, likes, views en comments</li>
                    <li>YouTube subscribers, views, likes en comments</li>
                    <li>TikTok followers, likes en views</li>
                    <li>Spotify streams en monthly listeners</li>
                    <li>LinkedIn connections en engagement</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Alle services worden uitgevoerd door echte, actieve gebruikers in overeenstemming met de richtlijnen 
                    van de betreffende sociale media platforms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. Bestellingen en Betaling</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    3.1. Bestellingen worden definitief na ontvangst van de volledige betaling.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    3.2. Betaling dient vooraf te geschieden via de beschikbare betaalmethoden op onze website.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    3.3. Prijzen zijn inclusief BTW en kunnen zonder voorafgaande kennisgeving worden gewijzigd.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    3.4. Annulering is alleen mogelijk voordat de uitvoering van de bestelling is gestart.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Levering en Uitvoering</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    4.1. Levertijden zijn indicatief en kunnen variëren afhankelijk van de service en hoeveelheid.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    4.2. De meeste orders worden binnen 24 uur gestart en voltooid binnen 1-7 werkdagen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    4.3. Voor de uitvoering van onze services heeft u toegang nodig tot de betreffende sociale media accounts 
                    of moeten deze publiek toegankelijk zijn.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Garanties en Aansprakelijkheid</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    5.1. Wij bieden een refill garantie op de meeste services voor een periode van 30-365 dagen, 
                    afhankelijk van de specifieke service.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    5.2. Minimale fluctuaties in aantallen zijn normaal en vallen niet onder de garantie.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    5.3. Onze aansprakelijkheid is beperkt tot het bedrag dat u voor de betreffende service heeft betaald.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    5.4. Wij zijn niet aansprakelijk voor eventuele schade door wijzigingen in algoritmes of beleid 
                    van sociale media platforms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Klantverplichtingen</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    6.1. U bent verplicht correcte en actuele informatie te verstrekken bij het plaatsen van bestellingen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    6.2. Het is niet toegestaan onze services te gebruiken voor illegale doeleinden of content 
                    die in strijd is met de community guidelines van sociale media platforms.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    6.3. U bent verantwoordelijk voor het naleven van de voorwaarden van de betreffende sociale media platforms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Privacy en Gegevensbescherming</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    7.1. Wij respecteren uw privacy en handelen in overeenstemming met de Algemene Verordening 
                    Gegevensbescherming (AVG).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    7.2. Voor meer informatie over hoe wij met uw gegevens omgaan, verwijzen wij naar ons privacybeleid.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Wijzigingen</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij behouden ons het recht voor deze gebruiksvoorwaarden te wijzigen. Wijzigingen treden in werking 
                    zodra deze op onze website zijn gepubliceerd. Het is uw verantwoordelijkheid om deze voorwaarden 
                    regelmatig te controleren.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">9. Toepasselijk Recht</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Op deze gebruiksvoorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd 
                    aan de bevoegde rechter in Amsterdam, Nederland.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Voor vragen over deze gebruiksvoorwaarden kunt u contact opnemen via:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li>📧 Email: support@boostdirect.nl</li>
                    <li>📞 Telefoon: +31 20 123 4567</li>
                    <li>📍 Adres: Herengracht 124, 1015 BT Amsterdam, Nederland</li>
                  </ul>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    
  );
};

export default TermsOfService;