import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Business from "@/components/Business";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery"

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Technology />
      <Services />
      <Process />
      <Gallery />
      <Business />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
