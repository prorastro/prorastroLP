import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Hardware from "@/components/Hardware";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="animate-page-in">
        <Hero />
        <Features />
        <Hardware />
        <Process />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
