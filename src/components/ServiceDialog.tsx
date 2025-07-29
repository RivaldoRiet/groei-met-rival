import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { services, getServicesByPlatform } from "@/data/services";
import ServiceCard from "./ServiceCard";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceDialogProps {
  open: boolean;
  onClose: () => void;
}

const ServiceDialog = ({ open, onClose }: ServiceDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Alle");
  const [filteredServices, setFilteredServices] = useState(services);

  const platforms = ["Alle", "Instagram", "YouTube", "TikTok", "Spotify", "LinkedIn", "Threads"];

  useEffect(() => {
    let filtered = services;

    // Filter by platform
    if (selectedPlatform !== "Alle") {
      filtered = getServicesByPlatform(selectedPlatform);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.platform.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by popularity (services are already sorted in data file)
    setFilteredServices(filtered);
  }, [searchQuery, selectedPlatform]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedPlatform("Alle");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-6">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              🚀 Kies je Social Media Services
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
          
          {/* Step 1: Platform Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Stap 1: Kies je platform</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {platforms.map((platform) => (
                <Button
                  key={platform}
                  variant={selectedPlatform === platform ? "default" : "outline"}
                  className="h-12 text-sm font-medium"
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>

          {/* Step 2: Search (only show when platform is selected) */}
          {selectedPlatform !== "Alle" && (
            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">Stap 2: Verfijn je zoekopdracht (optioneel)</h3>
              <div className="relative">
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
          
          {(searchQuery || selectedPlatform !== "Alle") && (
            <div className="mt-4">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                🔄 Alles resetten
              </Button>
            </div>
          )}
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-6">
          {filteredServices.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2">Geen services gevonden</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Probeer je zoekterm aan te passen of kies een ander platform filter.
                </p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  Toon alle services
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
                    {selectedPlatform !== "Alle" ? `${selectedPlatform} services` : "Alle platforms"}
                    {searchQuery && ` matching "${searchQuery}"`}
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