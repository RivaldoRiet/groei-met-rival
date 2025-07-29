import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getServicesByPlatform } from "@/data/services";

const AllPlatforms = () => {
  const platforms = [
    { name: "Instagram", services: getServicesByPlatform("Instagram").length, icon: "📸", color: "from-pink-500 to-rose-500", path: "/instagram" },
    { name: "YouTube", services: getServicesByPlatform("YouTube").length, icon: "📺", color: "from-red-500 to-red-600", path: "/youtube" },
    { name: "TikTok", services: getServicesByPlatform("TikTok").length, icon: "🎵", color: "from-purple-500 to-pink-500", path: "/tiktok" },
    { name: "Spotify", services: getServicesByPlatform("Spotify").length, icon: "🎵", color: "from-green-500 to-green-600", path: "/spotify" },
    { name: "LinkedIn", services: getServicesByPlatform("LinkedIn").length, icon: "💼", color: "from-blue-700 to-blue-800", path: "/linkedin" },
    { name: "Threads", services: getServicesByPlatform("Threads").length, icon: "🧵", color: "from-gray-500 to-black", path: "/threads" },
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
            <Link key={index} to={platform.path} className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 border border-border hover:border-primary/20 group block">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                {platform.icon}
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                {platform.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {platform.services} services
              </p>
            </Link>
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