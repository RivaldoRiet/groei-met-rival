import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Algemeen",
      questions: [
        {
          question: "Wat is BoostDirect?",
          answer: "BoostDirect is een Nederlandse leverancier van premium social media marketing services. We helpen bedrijven, influencers en content creators hun online aanwezigheid te vergroten met authentieke, actieve gebruikers."
        },
        {
          question: "Zijn jullie services legaal en veilig?",
          answer: "Ja, alle onze services zijn 100% legaal en veilig. We volgen strikt de richtlijnen van alle sociale media platforms en gebruiken alleen echte, actieve accounts."
        },
        {
          question: "Hoe lang zijn jullie al actief?",
          answer: "BoostDirect is sinds 2017 actief in de social media marketing industrie. In die tijd hebben we meer dan 96.731 bestellingen succesvol afgehandeld."
        }
      ]
    },
    {
      title: "Bestellingen & Betaling",
      questions: [
        {
          question: "Hoe plaats ik een bestelling?",
          answer: "Het plaatsen van een bestelling is simpel: selecteer de gewenste service, voer uw link in, kies de hoeveelheid en ga naar de checkout. U kunt betalen via iDEAL, creditcard of andere beschikbare betaalmethoden."
        },
        {
          question: "Welke betaalmethoden accepteren jullie?",
          answer: "We accepteren iDEAL, creditcards (Visa, Mastercard), PayPal, bankoverschrijving en cryptocurrency. Alle betalingen worden veilig verwerkt."
        },
        {
          question: "Kan ik mijn bestelling annuleren?",
          answer: "Bestellingen kunnen alleen worden geannuleerd voordat ze zijn gestart. Zodra we beginnen met de uitvoering, kunnen we de bestelling niet meer stoppen. Neem contact op zo snel mogelijk als u wilt annuleren."
        },
        {
          question: "Krijg ik een factuur voor mijn bestelling?",
          answer: "Ja, na elke succesvolle betaling ontvangt u automatisch een factuur per email. Deze kunt u ook downloaden vanuit uw account dashboard."
        }
      ]
    },
    {
      title: "Levering & Timing",
      questions: [
        {
          question: "Hoe snel worden orders gestart?",
          answer: "De meeste orders worden binnen 1-24 uur gestart. Voor urgente bestellingen hebben we express services beschikbaar die binnen enkele uren starten."
        },
        {
          question: "Hoe lang duurt het voordat mijn order compleet is?",
          answer: "Dit hangt af van de service en hoeveelheid. Kleine orders (100-1000) worden meestal binnen 1-3 dagen voltooid, grotere orders kunnen 3-7 dagen duren. Specifieke tijden staan bij elke service vermeld."
        },
        {
          question: "Kan ik de voortgang van mijn bestelling volgen?",
          answer: "Ja, u kunt de voortgang van alle bestellingen volgen in uw account dashboard. We sturen ook email updates bij belangrijke mijlpalen."
        },
        {
          question: "Wat gebeurt er als mijn bestelling vertraagd is?",
          answer: "In het zeldzame geval van vertraging nemen we proactief contact met u op. We bieden compensatie of alternatieve oplossingen aan voor aanzienlijke vertragingen."
        }
      ]
    },
    {
      title: "Services & Kwaliteit",
      questions: [
        {
          question: "Zijn de followers/likes/views echt?",
          answer: "Ja, alle onze services leveren echte, actieve gebruikers. We gebruiken geen bots of fake accounts. Alle interacties komen van authentieke profielen."
        },
        {
          question: "Kunnen followers/likes weer verdwijnen?",
          answer: "Minimale fluctuatie is normaal op alle sociale media platforms. We bieden echter een refill garantie: als er significante drops zijn binnen de garantieperiode, vullen we deze gratis aan."
        },
        {
          question: "Welke platforms ondersteunen jullie?",
          answer: "We ondersteunen alle grote sociale media platforms: Instagram, YouTube, TikTok, Facebook, Twitter, LinkedIn, Spotify, SoundCloud en meer. Ons aanbod wordt regelmatig uitgebreid."
        },
        {
          question: "Hebben jullie services voor specifieke landen/regio's?",
          answer: "Ja, we bieden geo-targeted services aan voor verschillende landen en regio's. Dit is vooral nuttig voor lokale bedrijven die hun doelgroep willen bereiken."
        }
      ]
    },
    {
      title: "Account & Support",
      questions: [
        {
          question: "Moet ik een account aanmaken?",
          answer: "Een account is niet verplicht voor eenmalige bestellingen, maar wel aanbevolen. Met een account kunt u uw bestellingen volgen, gebruik maken van kortingen en sneller bestellen."
        },
        {
          question: "Hoe kan ik contact opnemen met support?",
          answer: "U kunt contact opnemen via email (support@boostdirect.nl), telefoon (+31 20 123 4567), live chat op onze website, of het contactformulier. Onze support is beschikbaar van maandag tot vrijdag 9:00-18:00."
        },
        {
          question: "In welke talen is support beschikbaar?",
          answer: "Onze primaire support is in het Nederlands en Engels. Voor andere talen proberen we altijd een oplossing te vinden, maar dit kan wat langer duren."
        },
        {
          question: "Hebben jullie een affiliate programma?",
          answer: "Ja, we hebben een aantrekkelijk affiliate programma met competitieve commissies. Meer informatie vindt u op onze affiliate pagina of neem contact op voor details."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Veelgestelde Vragen
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Vind snel antwoorden op de meest gestelde vragen over onze services
              </p>
            </header>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <section key={categoryIndex}>
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6 text-primary">{category.title}</h2>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem 
                            key={faqIndex} 
                            value={`${categoryIndex}-${faqIndex}`}
                            className="border border-border rounded-lg px-4"
                          >
                            <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>
              ))}
            </div>

            {/* Contact CTA */}
            <section className="mt-16 text-center">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Vraag Niet Gevonden?</h2>
                  <p className="text-muted-foreground mb-6">
                    Staat uw vraag er niet bij? Ons support team helpt u graag verder!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Contact Opnemen
                    </a>
                    <a 
                      href="mailto:support@boostdirect.nl" 
                      className="inline-flex items-center justify-center border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      Email Versturen
                    </a>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Quick Help Section */}
            <section className="mt-12">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Snelle Hulp</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl mb-3">📞</div>
                      <h3 className="font-semibold mb-2">Bel Ons</h3>
                      <p className="text-sm text-muted-foreground">+31 20 123 4567</p>
                      <p className="text-xs text-muted-foreground">Ma-Vr 9:00-18:00</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-3">💬</div>
                      <h3 className="font-semibold mb-2">Live Chat</h3>
                      <p className="text-sm text-muted-foreground">Instant ondersteuning</p>
                      <p className="text-xs text-muted-foreground">24/7 beschikbaar</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-3">📧</div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-sm text-muted-foreground">support@boostdirect.nl</p>
                      <p className="text-xs text-muted-foreground">Antwoord binnen 24u</p>
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

export default FAQ;