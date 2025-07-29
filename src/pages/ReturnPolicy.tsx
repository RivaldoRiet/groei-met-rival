import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const ReturnPolicy = () => {
  return (
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Retourbeleid
              </h1>
              <p className="text-lg text-muted-foreground">
                Laatst bijgewerkt: 1 januari 2025
              </p>
            </header>

            <Card>
              <CardContent className="p-8 prose prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Algemene Informatie</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bij BoostDirect staan wij voor de kwaliteit van onze diensten. Dit retourbeleid legt uit 
                    onder welke voorwaarden u recht heeft op terugbetaling of compensatie voor onze 
                    social media marketing services.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Vanwege de aard van onze digitale diensten gelden er specifieke voorwaarden voor 
                    retouren en refunds, die afwijken van standaard consumentenrecht voor fysieke producten.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. Annulering Vóór Uitvoering</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>2.1 Volledige Terugbetaling</strong><br />
                    Als uw bestelling nog niet is gestart, kunt u deze kosteloos annuleren en ontvangt 
                    u een volledige terugbetaling binnen 5-7 werkdagen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>2.2 Hoe te Annuleren</strong><br />
                    Neem zo spoedig mogelijk contact op via:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Email: support@boostdirect.nl</li>
                    <li>Telefoon: +31 20 123 4567</li>
                    <li>Live chat op onze website</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. Refund Na Start Uitvoering</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>3.1 Beperkte Terugbetaling</strong><br />
                    Zodra de uitvoering van uw bestelling is gestart, is volledige annulering niet meer mogelijk. 
                    In bepaalde gevallen kunnen we een gedeeltelijke terugbetaling verstrekken voor het 
                    niet-uitgevoerde deel van de bestelling.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>3.2 Beoordeling Per Geval</strong><br />
                    Elke refund aanvraag na start van uitvoering wordt individueel beoordeeld door ons 
                    customer service team, rekening houdend met de specifieke omstandigheden.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Garanties en Refill Beleid</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>4.1 Drop Protection Garantie</strong><br />
                    Voor de meeste services bieden wij een refill garantie van 30-365 dagen (afhankelijk van de service). 
                    Als er significante drops plaatsvinden binnen deze periode, vullen wij deze gratis aan.
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">Garantieperiodes per service:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li><strong>Instagram Followers:</strong> 365 dagen</li>
                    <li><strong>Instagram Likes:</strong> 90 dagen</li>
                    <li><strong>YouTube Subscribers:</strong> 365 dagen</li>
                    <li><strong>YouTube Views:</strong> 30 dagen (geen refill mogelijk)</li>
                    <li><strong>TikTok Followers:</strong> 180 dagen</li>
                    <li><strong>TikTok Likes:</strong> 60 dagen</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed">
                    <strong>4.2 Normale Fluctuatie</strong><br />
                    Minimale fluctuaties (tot 5% van de bestelde hoeveelheid) zijn normaal op alle 
                    sociale media platforms en vallen niet onder onze garantie.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Refund Voorwaarden</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    U komt in aanmerking voor een refund in de volgende gevallen:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Wij kunnen de bestelde service niet leveren binnen de aangegeven tijd + 50%</li>
                    <li>Er is een technische fout opgetreden aan onze kant</li>
                    <li>De verkeerde service is geleverd</li>
                    <li>U heeft dubbel betaald voor dezelfde bestelling</li>
                  </ul>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Geen refund in de volgende gevallen:</strong>
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Uw sociale media account wordt privé gemaakt na bestelling</li>
                    <li>U wijzigt uw gebruikersnaam na bestelling</li>
                    <li>Normale fluctuaties binnen platform algoritmes</li>
                    <li>Persoonlijke voorkeur wijzigingen</li>
                    <li>Services die al volledig zijn geleverd conform bestelling</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Hoe Een Refund Aanvragen</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>6.1 Contact Opnemen</strong><br />
                    Voor refund aanvragen dient u contact op te nemen binnen 30 dagen na levering 
                    van de service via:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Email: refunds@boostdirect.nl</li>
                    <li>Onderwerpregels: "Refund Aanvraag - [Bestelnummer]"</li>
                  </ul>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>6.2 Benodigde Informatie</strong><br />
                    Vermeld bij uw aanvraag:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Uw bestelnummer</li>
                    <li>Reden voor refund aanvraag</li>
                    <li>Screenshots of andere bewijsvoering (indien van toepassing)</li>
                    <li>Gewenste oplossing (refund, refill, of vervanging)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Verwerkingstijden</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>7.1 Beoordeling</strong><br />
                    Refund aanvragen worden binnen 2-5 werkdagen beoordeeld door ons team.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>7.2 Uitbetaling</strong><br />
                    Goedgekeurde refunds worden verwerkt binnen 5-10 werkdagen naar uw oorspronkelijke 
                    betaalmethode. Voor sommige betaalmethoden kan dit langer duren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>7.3 Communicatie</strong><br />
                    U ontvangt een email bevestiging zodra uw refund is verwerkt, inclusief 
                    referentienummer voor tracking.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Alternatieve Oplossingen</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    In plaats van een refund bieden wij ook:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Service Credits:</strong> Tegoed voor toekomstige bestellingen</li>
                    <li><strong>Vervangservice:</strong> Een gelijkwaardige alternatieve service</li>
                    <li><strong>Upgrade:</strong> Gratis upgrade naar een premium service</li>
                    <li><strong>Refill:</strong> Gratis aanvulling van gedroppte aantallen</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">9. Klachten en Escalatie</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Als u niet tevreden bent met de afhandeling van uw refund aanvraag:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Stap 1: Neem contact op met onze customer service manager</li>
                    <li>Stap 2: Vraag escalatie naar het management team</li>
                    <li>Stap 3: Indien nodig, schakel externe bemiddeling in</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Informatie</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Voor vragen over ons retourbeleid of refund aanvragen:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li>📧 Email: refunds@boostdirect.nl</li>
                    <li>📧 Support: support@boostdirect.nl</li>
                    <li>📞 Telefoon: +31 20 123 4567</li>
                    <li>💬 Live Chat: Beschikbaar op onze website</li>
                    <li>📍 Adres: Herengracht 124, 1015 BT Amsterdam, Nederland</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong>Kantooruren:</strong> Maandag t/m Vrijdag: 9:00 - 18:00 CET<br />
                    <strong>Support:</strong> 24/7 via email en live chat
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    
  );
};

export default ReturnPolicy;