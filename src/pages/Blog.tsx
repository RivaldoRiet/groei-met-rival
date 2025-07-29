import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "De Ultieme Gids voor Instagram Growth in 2025",
      excerpt: "Leer hoe je organisch meer followers krijgt en je engagement verhoogt met bewezen strategieën.",
      author: "Sarah van Berg",
      date: "22 januari 2025",
      readTime: "8 min",
      category: "Instagram",
      image: "📸"
    },
    {
      id: 2,
      title: "YouTube Algoritme Secrets: Hoe Je Videos Viraal Laten Gaan",
      excerpt: "Ontdek de geheimen achter het YouTube algoritme en hoe je meer views kunt genereren.",
      author: "Mark de Jong",
      date: "19 januari 2025",
      readTime: "12 min",
      category: "YouTube",
      image: "📺"
    },
    {
      id: 3,
      title: "TikTok Trends 2025: Wat Content Creators Moeten Weten",
      excerpt: "De belangrijkste TikTok trends die je strategie zullen bepalen dit jaar.",
      author: "Lisa Hartman",
      date: "16 januari 2025",
      readTime: "6 min",
      category: "TikTok",
      image: "🎵"
    },
    {
      id: 4,
      title: "LinkedIn Marketing voor B2B Bedrijven: Complete Strategie",
      excerpt: "Hoe je LinkedIn effectief inzet voor lead generatie en brand awareness.",
      author: "Robert Kamps",
      date: "13 januari 2025",
      readTime: "10 min",
      category: "LinkedIn",
      image: "💼"
    },
    {
      id: 5,
      title: "Social Media ROI Meten: Tools en Technieken",
      excerpt: "Leer hoe je het rendement van je social media investeringen kunt meten en optimaliseren.",
      author: "Emma Visser",
      date: "10 januari 2025",
      readTime: "7 min",
      category: "Analytics",
      image: "📊"
    },
    {
      id: 6,
      title: "Content Planning: Van Idee tot Uitvoering",
      excerpt: "Een stap-voor-stap gids voor het plannen en uitvoeren van succesvolle content strategieën.",
      author: "Tom Bakker",
      date: "7 januari 2025",
      readTime: "9 min",
      category: "Strategie",
      image: "📝"
    }
  ];

  const categories = ["Alle", "Instagram", "YouTube", "TikTok", "LinkedIn", "Analytics", "Strategie"];

  return (
    <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Social Media Marketing Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Waardevolle tips, strategieën en inzichten om je social media presence naar het volgende niveau te tillen
              </p>
            </header>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            <section className="mb-16">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Featured
                      </span>
                      <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>{blogPosts[0].author}</span>
                        <span className="mx-2">•</span>
                        <span>{blogPosts[0].date}</span>
                        <span className="mx-2">•</span>
                        <span>{blogPosts[0].readTime} lezen</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-lg flex items-center justify-center text-6xl">
                      {blogPosts[0].image}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article key={post.id}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-lg p-8 text-center text-3xl mb-4">
                        {post.image}
                      </div>
                      <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                        <span>{post.author}</span>
                        <span>{post.readTime} lezen</span>
                      </div>
                      <time className="text-xs text-muted-foreground block mt-1">{post.date}</time>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>

            {/* Newsletter CTA */}
            <section className="mt-16 text-center">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Blijf Op De Hoogte</h2>
                  <p className="text-muted-foreground mb-6">
                    Ontvang wekelijks de beste social media marketing tips direct in je inbox.
                  </p>
                  <div className="max-w-md mx-auto flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Jouw email adres" 
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                      Abonneren
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

export default Blog;