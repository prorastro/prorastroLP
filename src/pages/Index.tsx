import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load de tudo abaixo do fold — reduz bundle inicial e melhora LCP/TTI
const Features = lazy(() => import("@/components/Features"));
const Hardware = lazy(() => import("@/components/Hardware"));
const Process  = lazy(() => import("@/components/Process"));
const Pricing  = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ      = lazy(() => import("@/components/FAQ"));
const CTA      = lazy(() => import("@/components/CTA"));
const Footer   = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header e Hero são críticos — carregados de forma síncrona */}
      <Header />
      <div className="animate-page-in">
        <Hero />
        <Suspense fallback={null}>
          <Features />
          <Hardware />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
        </Suspense>
        <div className="relative z-0">
            {/* Unified Background for CTA and Footer */}
            <div className="absolute inset-0 z-[-1] bg-[#040404]" />
            
            {/* Image Wrapper with Seamless Fade */}
            <div className="absolute top-0 left-0 w-full h-[750px] sm:h-[900px] md:h-full z-[-1]">
              <img 
                src="/cta_background_car.png" 
                alt="Car background"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_bottom] md:object-[center_85%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-transparent pointer-events-none" />
            </div>
            <div className="absolute inset-0 bg-black/60 z-[-1] mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/90 z-[-1] opacity-90 pointer-events-none" />

            <Suspense fallback={null}>
              <CTA />
              <Footer />
            </Suspense>
          </div>
      </div>
    </div>
  );
};

export default Index;
