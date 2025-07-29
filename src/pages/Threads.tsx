import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServicesByPlatform } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { MessageCircle } from "lucide-react";

const Threads = () => {
  const threadsServices = getServicesByPlatform("Threads");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-black rounded-full text-white mb-4">
                <MessageCircle size={28} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Threads Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Groei op Meta's nieuwste platform met onze Threads services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {threadsServices.map((service) => (
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

export default Threads;