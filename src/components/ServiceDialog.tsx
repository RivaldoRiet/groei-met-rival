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

    setFilteredServices(filtered);
  }, [searchQuery, selectedPlatform]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedPlatform("Alle");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              🚀 Kies je Social Media Services
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={20} />
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Zoek services... (bijv. 'Instagram likes', 'YouTube views')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Platform filter */}
            <div className="flex gap-2 flex-wrap">
              {platforms.map((platform) => (
                <Badge
                  key={platform}
                  variant={selectedPlatform === platform ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedPlatform(platform)}
                >
                  {platform}
                </Badge>
              ))}
            </div>
            
            {(searchQuery || selectedPlatform !== "Alle") && (
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Reset
              </Button>
            )}
          </div>
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