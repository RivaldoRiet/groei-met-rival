import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServicesByPlatform } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { Linkedin } from "lucide-react";

const LinkedIn = () => {
  const linkedinServices = getServicesByPlatform("LinkedIn");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white mb-4">
                <Linkedin size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                LinkedIn Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Versterk je professionele netwerk met onze LinkedIn services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {linkedinServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LinkedIn;