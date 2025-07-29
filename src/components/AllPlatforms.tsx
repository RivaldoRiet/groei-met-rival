import { Button } from "@/components/ui/button";

const AllPlatforms = () => {
  const platforms = [
    { name: "Instagram", services: "5+", icon: "📱", color: "from-pink-500 to-rose-500" },
    { name: "Youtube", services: "4+", icon: "📺", color: "from-red-500 to-red-600" },
    { name: "Tiktok", services: "4+", icon: "🎬", color: "from-purple-500 to-pink-500" },
    { name: "Spotify", services: "3+", icon: "🎵", color: "from-green-500 to-green-600" },
    { name: "Facebook", services: "3+", icon: "👥", color: "from-blue-600 to-blue-700" },
    { name: "Twitter", services: "3+", icon: "🐦", color: "from-sky-500 to-blue-500" },
    { name: "Telegram", services: "2+", icon: "✈️", color: "from-blue-500 to-indigo-500" },
    { name: "Linkedin", services: "2+", icon: "💼", color: "from-blue-700 to-blue-800" },
    { name: "Audiomack", services: "2+", icon: "🎧", color: "from-orange-500 to-red-500" },
    { name: "Soundcloud", services: "1+", icon: "☁️", color: "from-orange-500 to-orange-600" },
    { name: "Twitch", services: "1+", icon: "🎮", color: "from-purple-600 to-purple-700" },
    { name: "Reddit", services: "1+", icon: "🗣️", color: "from-orange-600 to-red-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alle Platforms
          </h2>
          <p className="text-xl text-muted-foreground">
            Wij ondersteunen meer dan 31 verschillende services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20 group">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                {platform.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {platform.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {platform.services} services
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Bekijk Alle Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllPlatforms;