import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Music } from "lucide-react";
import { otherServices } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const AppleMusic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const appleMusicServices = otherServices.filter(service => 
    service.platform === "Apple Music" &&
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Music size={64} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Apple Music Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Boost je Apple Music aanwezigheid met onze premium marketing services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                {appleMusicServices.length}+ Services
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                Instant Delivery
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                24/7 Support
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Zoek Apple Music services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apple Music Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kies uit onze uitgebreide collectie Apple Music marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {appleMusicServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {appleMusicServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Geen services gevonden voor "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AppleMusic;