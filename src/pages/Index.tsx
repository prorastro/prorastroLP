import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load de tudo abaixo do fold — reduz bundle inicial e melhora LCP/TTI
const Features = lazy(() => import("@/components/Features"));
const Hardware = lazy(() => import("@/components/Hardware"));
const Process  = lazy(() => import("@/components/Process"));
const Pricing  = lazy(() => import("@/components/Pricing"));
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
          <FAQ />
          <CTA />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
