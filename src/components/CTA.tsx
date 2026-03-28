import { Button } from "@/components/ui/button";
import { ArrowRight, Crosshair } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const CTA = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-32 relative overflow-hidden bg-[#030303] border-t border-white/5">
      {/* Huge radial pulse under the CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_-5px_30px_rgba(255,0,0,0.5)]" />

      <div className="container relative z-10">
        <div
          ref={ref}
          className={cn(
            "text-center max-w-4xl mx-auto transition-all duration-700 p-10 md:p-16 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative overflow-hidden",
            inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"
          )}
        >
          {/* subtle interior grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs md:text-sm font-black text-primary uppercase tracking-[0.2em] mb-8">
              <Crosshair className="h-4 w-4" />
              Sua frota sob controle
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              PRONTO PARA PROTEGER{" "}
              <span className="block text-primary">SEU VEÍCULO?</span>
            </h2>

            <p className="text-white/50 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Perca o medo do imprevisto. Junte-se milhares de motoristas com nossa tecnologia embarcada e gerencie sua segurança na palma da mão.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
              <Button
                size="lg"
                className="text-sm md:text-lg px-8 py-7 md:py-8 font-display font-black uppercase tracking-widest bg-primary text-white hover:bg-primary/90 shadow-[0_15px_40px_rgba(255,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,0,0,0.5)] hover:-translate-y-1 transition-all group"
              >
                Solicitar Demonstração Grátis
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
