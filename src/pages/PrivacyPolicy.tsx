import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacybeleid - BoostDirect | Privacy Policy</title>
        <meta 
          name="description" 
          content="Lees het privacybeleid van BoostDirect over hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen." 
        />
        <meta name="keywords" content="privacybeleid, privacy policy, gegevensbescherming, avg, boostdirect" />
        <link rel="canonical" href="https://boostdirect.nl/privacybeleid" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Privacybeleid
              </h1>
              <p className="text-lg text-muted-foreground">
                Laatst bijgewerkt: 1 januari 2025
              </p>
            </header>

            <Card>
              <CardContent className="p-8 prose prose-slate max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">1. Inleiding</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BoostDirect (gevestigd te Herengracht 124, 1015 BT Amsterdam, Nederland) hecht grote waarde aan 
                    de bescherming van uw persoonlijke gegevens. In dit privacybeleid leggen wij uit welke persoonlijke 
                    gegevens wij verzamelen, hoe wij deze gebruiken en welke rechten u heeft.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dit privacybeleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) 
                    en andere toepasselijke privacywetgeving.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">2. Welke Gegevens Verzamelen Wij?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wij kunnen de volgende categorieën persoonlijke gegevens verzamelen:
                  </p>
                  
                  <h3 className="text-lg font-semibold mb-3">2.1 Accountgegevens</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Naam en contactgegevens (email, telefoon)</li>
                    <li>Gebruikersnaam en wachtwoord</li>
                    <li>Betalingsgegevens (via veilige externe betalingsproviders)</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-3">2.2 Bestellingsgegevens</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Social media links en usernames</li>
                    <li>Bestelde services en hoeveelheden</li>
                    <li>Betalingshistorie en factuurgegevens</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-3">2.3 Technische gegevens</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>IP-adres en browserinformatie</li>
                    <li>Cookies en vergelijkbare technologieën</li>
                    <li>Website gebruiksstatistieken</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">3. Hoe Gebruiken Wij Uw Gegevens?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Het uitvoeren van onze diensten en het verwerken van bestellingen</li>
                    <li>Communicatie over uw bestellingen en klantenservice</li>
                    <li>Het verbeteren van onze website en diensten</li>
                    <li>Het verzenden van nieuwsbrieven (met uw toestemming)</li>
                    <li>Het naleven van wettelijke verplichtingen</li>
                    <li>Fraudepreventie en beveiliging</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">4. Rechtsgronden voor Verwerking</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wij verwerken uw persoonlijke gegevens op basis van de volgende rechtsgronden:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Uitvoering van een overeenkomst:</strong> Voor het leveren van onze diensten</li>
                    <li><strong>Gerechtvaardigd belang:</strong> Voor website verbetering en klantenservice</li>
                    <li><strong>Toestemming:</strong> Voor nieuwsbrieven en marketing communicatie</li>
                    <li><strong>Wettelijke verplichting:</strong> Voor administratieve en fiscale doeleinden</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">5. Delen van Gegevens</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wij delen uw persoonlijke gegevens alleen in de volgende gevallen:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Met betalingsproviders voor het verwerken van betalingen</li>
                    <li>Met cloudserviceproviders voor hosting en data-opslag</li>
                    <li>Met externe serviceproviders die ons helpen bij het leveren van diensten</li>
                    <li>Wanneer dit wettelijk verplicht is</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Alle externe partijen zijn contractueel verplicht uw gegevens veilig te behandelen 
                    en alleen te gebruiken voor de overeengekomen doeleinden.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">6. Bewaartermijnen</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Accountgegevens: Zolang uw account actief is + 1 jaar na deactivering</li>
                    <li>Bestellingsgegevens: 7 jaar (fiscale bewaarplicht)</li>
                    <li>Marketing toestemmingen: Tot intrekking van toestemming</li>
                    <li>Website logs: Maximaal 12 maanden</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">7. Uw Rechten</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Op grond van de AVG heeft u de volgende rechten:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
                    <li><strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
                    <li><strong>Recht op vergetelheid:</strong> U kunt uw gegevens laten verwijderen</li>
                    <li><strong>Recht op beperking:</strong> U kunt de verwerking laten beperken</li>
                    <li><strong>Recht op dataportabiliteit:</strong> U kunt uw gegevens in een bruikbaar formaat ontvangen</li>
                    <li><strong>Recht van bezwaar:</strong> U kunt bezwaar maken tegen bepaalde verwerkingen</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Om gebruik te maken van deze rechten, kunt u contact opnemen via support@boostdirect.nl.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">8. Beveiliging</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens 
                    te beschermen tegen verlies, misbruik, ongeautoriseerde toegang, openbaarmaking, wijziging 
                    of vernietiging. Dit omvat encryptie, toegangscontroles en regelmatige beveiligingsaudits.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Onze website gebruikt cookies voor:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Functionele cookies: Voor het goed functioneren van de website</li>
                    <li>Analytische cookies: Voor het analyseren van websitegebruik</li>
                    <li>Marketing cookies: Voor gepersonaliseerde advertenties (met uw toestemming)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    U kunt cookies beheren via uw browserinstellingen of onze cookie-instellingen.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">10. Internationale Overdrachten</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij kunnen uw gegevens overdragen naar landen buiten de EU/EEA voor cloudservices. 
                    In dat geval zorgen wij ervoor dat er passende waarborgen zijn voor de bescherming 
                    van uw gegevens, zoals adequaatheidsbeslissingen of standaard contractuele bepalingen.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">11. Wijzigingen in dit Privacybeleid</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Bij belangrijke wijzigingen 
                    zullen wij u hierover informeren via email of een prominente melding op onze website. 
                    Wij adviseren u dit beleid regelmatig te bekijken.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Voor vragen over dit privacybeleid of over hoe wij uw gegevens verwerken, 
                    kunt u contact opnemen:
                  </p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li>📧 Email: privacy@boostdirect.nl</li>
                    <li>📞 Telefoon: +31 20 123 4567</li>
                    <li>📍 Adres: Herengracht 124, 1015 BT Amsterdam, Nederland</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens 
                    als u van mening bent dat wij uw gegevens niet correct verwerken.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;