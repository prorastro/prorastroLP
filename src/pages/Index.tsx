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

            {/* Image Wrapper with Seamless Fade — desktop: full height; mobile: CTA only */}
            <div className="absolute top-0 left-0 w-full md:h-full h-[420px] z-[-1] overflow-hidden">
              <img
                src="/cta-final-4k.png"
                alt="Car background"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_40%] blur-[1px] md:scale-105 scale-100"
              />
              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#040404] via-[#040404]/80 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040404] via-[#040404]/60 to-transparent pointer-events-none" />
            </div>
            <div className="absolute top-0 left-0 w-full md:h-full h-[420px] bg-black/20 md:bg-black/40 z-[-1] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full md:h-full h-[420px] bg-gradient-to-t from-black/40 via-transparent to-black/60 md:from-black/20 md:via-transparent md:to-black/90 z-[-1] opacity-60 pointer-events-none" />

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
