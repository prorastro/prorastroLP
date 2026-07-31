import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import Marquee from "@/components/Marquee";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsappFloat from "@/components/WhatsappFloat";

// Lazy load do que está abaixo do fold — reduz bundle inicial e melhora LCP/TTI
const Features = lazy(() => import("@/components/Features"));
const Process = lazy(() => import("@/components/Process"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <div className="animate-page-in">
        <Hero />
        <FeatureStrip />
        <Marquee />
        <Suspense fallback={null}>
          <Features />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Footer />
        </Suspense>
      </div>
      <WhatsappFloat />
    </div>
  );
};

export default Index;
