import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServicesByPlatform } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const YouTube = () => {
  const youtubeServices = getServicesByPlatform("YouTube");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-red-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-2xl mb-4">
                📺
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                YouTube Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Laat je YouTube kanaal groeien met onze professionele services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {youtubeServices.map((service) => (
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

export default YouTube;