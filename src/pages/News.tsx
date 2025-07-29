import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Nieuwe Instagram Features voor 2025",
      date: "25 januari 2025",
      excerpt: "Instagram introduceert nieuwe mogelijkheden voor content creators en bedrijven.",
      category: "Platform Updates"
    },
    {
      id: 2,
      title: "BoostDirect Breidt Service Portfolio Uit",
      date: "20 januari 2025",
      excerpt: "We hebben nieuwe services toegevoegd voor LinkedIn en Threads marketing.",
      category: "Bedrijfsnieuws"
    },
    {
      id: 3,
      title: "TikTok Marketing Trends 2025",
      date: "18 januari 2025",
      excerpt: "De belangrijkste trends die je social media strategie zullen bepalen dit jaar.",
      category: "Trends"
    },
    {
      id: 4,
      title: "YouTube Shorts vs TikTok: Wat Werkt Beter?",
      date: "15 januari 2025",
      excerpt: "Een vergelijking van de twee grootste platforms voor korte video content.",
      category: "Analyse"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Nieuws & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Blijf op de hoogte van de laatste ontwikkelingen in social media marketing
            </p>
          </header>

          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2 md:mb-0">
                        {item.category}
                      </span>
                      <time className="text-muted-foreground text-sm">{item.date}</time>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="text-primary hover:underline cursor-pointer text-sm font-medium">
                        Lees meer →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <section className="mt-16 text-center">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Mis Geen Update</h2>
                <p className="text-muted-foreground mb-6">
                  Schrijf je in voor onze nieuwsbrief en ontvang de laatste updates direct in je inbox.
                </p>
                <div className="max-w-md mx-auto flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Jouw email adres" 
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Inschrijven
                  </button>
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

export default News;