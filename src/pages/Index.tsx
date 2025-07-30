import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import PopularServices from "@/components/PopularServices";
import AllPlatforms from "@/components/AllPlatforms";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Statistics />
      <PopularServices />
      <AllPlatforms />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
