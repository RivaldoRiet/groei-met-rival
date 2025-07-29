import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X, Instagram, Youtube, Music, Linkedin, MessageSquare, ArrowLeft, Rocket, Smartphone } from "lucide-react";
import { services, getServicesByPlatform } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceDialogProps {
  open: boolean;
  onClose: () => void;
}

const ServiceDialog = ({ open, onClose }: ServiceDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("home");
  const [filteredServices, setFilteredServices] = useState(services);

  const platformsData = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      color: "bg-gradient-to-br from-purple-600 to-pink-500",
      description: "Likes, Followers, Views & meer"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      color: "bg-gradient-to-br from-red-600 to-red-500",
      description: "Views, Subscribers, Likes"
    },
    { 
      name: "TikTok", 
      icon: MessageSquare, 
      color: "bg-gradient-to-br from-black to-gray-800",
      description: "Views, Likes, Followers"
    },
    { 
      name: "Spotify", 
      icon: Music, 
      color: "bg-gradient-to-br from-green-600 to-green-500",
      description: "Plays, Followers, Saves"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      color: "bg-gradient-to-br from-blue-600 to-blue-500",
      description: "Followers, Likes, Connections"
    },
    { 
      name: "Threads", 
      icon: MessageSquare, 
      color: "bg-gradient-to-br from-gray-800 to-black",
      description: "Likes, Followers, Comments"
    }
  ];

  useEffect(() => {
    if (selectedPlatform === "home") {
      setFilteredServices([]);
      return;
    }

    let filtered = getServicesByPlatform(selectedPlatform);

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedPlatform]);

  const goBackToHome = () => {
    setSelectedPlatform("home");
    setSearchQuery("");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              {selectedPlatform === "home" ? 
                <><Rocket size={24} /> Kies je Social Media Platform</> : 
                <><Smartphone size={24} /> {selectedPlatform} Services</>
              }
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
          
          {selectedPlatform !== "home" && (
            <div className="mt-4 flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={goBackToHome} className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Terug naar platforms
              </Button>
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <Input
                  placeholder={`Zoek binnen ${selectedPlatform} services...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          )}
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {selectedPlatform === "home" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformsData.map((platform) => (
                <Card 
                  key={platform.name}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-primary/50"
                  onClick={() => setSelectedPlatform(platform.name)}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto rounded-2xl ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {(() => {
                        const IconComponent = platform.icon;
                        return <IconComponent className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{platform.name}</h3>
                    <p className="text-muted-foreground text-lg mb-4">{platform.description}</p>
                    <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block">
                      <span className="text-primary font-semibold">
                        {getServicesByPlatform(platform.name).length} services beschikbaar
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredServices.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Geen services gevonden</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Probeer je zoekterm aan te passen of ga terug naar de platform selectie.
                </p>
                <Button variant="outline" className="mt-4" onClick={goBackToHome}>
                  Terug naar platforms
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    {filteredServices.length} services gevonden
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedPlatform} services{searchQuery && ` matching "${searchQuery}"`}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;