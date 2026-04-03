import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-24 bg-transparent">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      <div className="container relative z-10 px-4">
        {/* SLEEK PREMIUM GLASS CARD */}
        <div className="relative max-w-5xl mx-auto md:px-0">
          {/* Enhanced Outer Glow */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10 opacity-50" />
          
          <div className="relative overflow-hidden bg-black/40 backdrop-blur-2xl border border-white/10 p-6 md:py-16 md:px-24 text-center shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            {/* Glossy Top Edge Reflection */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

            <h2 className="font-display text-xl md:text-6xl font-black text-white uppercase leading-[1.1] tracking-tighter mb-4 md:mb-6 relative z-10">
              Pronto para <span className="text-primary">proteger</span> seu veículo?
            </h2>

            <p className="text-white/60 text-[12px] md:text-lg mb-6 md:mb-10 max-w-2xl mx-auto leading-normal font-light relative z-10">
              Segurança veicular de elite com tecnologia de ponta e monitoramento 24h.
            </p>


            <div className="flex items-center justify-center relative z-10">
              <a
                href="https://wa.me/5591991837470"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  className="w-full sm:w-auto min-w-[260px] flex items-center justify-center gap-3 font-display font-black text-[13px] md:text-[17px] uppercase tracking-[0.1em] text-white bg-primary py-4 px-8 md:py-5 md:px-10 rounded-none border-none cursor-pointer shadow-[0_12px_35px_hsl(var(--primary)/0.5)] hover:bg-primary/90 hover:shadow-[0_18px_50px_hsl(var(--primary)/0.7)] transition-all hover:-translate-y-1 active:scale-95 group"
                >
                  <span>Falar com um atendente</span>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
                </button>
              </a>
            </div>
          </div>

          {/* Bottom Glossy Edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

      </div>



      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
    </section>
  );
};

export default CTA;
