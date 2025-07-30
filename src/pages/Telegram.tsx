import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Send } from "lucide-react";
import { otherServices } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const Telegram = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const telegramServices = otherServices.filter(service => 
    service.platform === "Telegram" &&
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-400 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Send size={64} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Telegram Marketing Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Boost je Telegram aanwezigheid met onze premium marketing services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                {telegramServices.length}+ Services
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
                placeholder="Zoek Telegram services..."
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
              Telegram Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kies uit onze uitgebreide collectie Telegram marketing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {telegramServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {telegramServices.length === 0 && (
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

export default Telegram;