import { Button } from "@/components/ui/button";
import { ArrowRight, Crosshair } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const CTA = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-32 relative overflow-hidden bg-[#030303]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="container relative z-10">
        <div
          ref={ref}
          className="text-center max-w-4xl mx-auto p-12 md:p-24 rounded-none bg-[#0E0E0E] shadow-[0_40px_100px_rgba(0,0,0,1)] relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-none bg-primary px-8 py-3 text-xs md:text-sm font-black text-white uppercase tracking-[0.3em] mb-10 shadow-[0_10px_30px_rgba(255,0,0,0.4)]">
              <Crosshair className="h-5 w-5" />
              CONSEC_ESTABLISHED
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
                className="text-sm md:text-lg px-12 py-8 md:py-10 font-display font-black uppercase tracking-[0.3em] bg-primary text-white hover:bg-primary/90 shadow-[0_20px_50px_rgba(255,0,0,0.5)] transition-all group rounded-none border-none"
              >
                SOLICITAR ACESSO AGORA
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-3 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
