import { getServicesByPlatform } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Music, Briefcase, MessageCircle, Camera } from "lucide-react";

const AllPlatforms = () => {
  const platforms = [
    { name: "Instagram", services: getServicesByPlatform("Instagram").length, icon: Instagram, color: "from-pink-500 to-rose-500", path: "/instagram" },
    { name: "YouTube", services: getServicesByPlatform("YouTube").length, icon: Youtube, color: "from-red-500 to-red-600", path: "/youtube" },
    { name: "TikTok", services: getServicesByPlatform("TikTok").length, icon: Music, color: "from-purple-500 to-pink-500", path: "/tiktok" },
    { name: "Spotify", services: getServicesByPlatform("Spotify").length, icon: Music, color: "from-green-500 to-green-600", path: "/spotify" },
    { name: "LinkedIn", services: getServicesByPlatform("LinkedIn").length, icon: Briefcase, color: "from-blue-700 to-blue-800", path: "/linkedin" },
    { name: "Threads", services: getServicesByPlatform("Threads").length, icon: MessageCircle, color: "from-gray-500 to-black", path: "/threads" },
  ];

  return (
    <section id="platforms" className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alle Platforms
          </h2>
          <p className="text-xl text-muted-foreground">
            Wij ondersteunen meer dan 31 verschillende services
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {platforms.map((platform, index) => (
            <Link key={index} to={platform.path} className="bg-card rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 group block">
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-xl md:text-2xl mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <platform.icon size={20} />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                {platform.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
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