import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-32 md:pb-48 bg-transparent">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

      <div className="container relative z-10 px-4">
        {/* TEXTO LIVRE SOBRE A IMAGEM */}
        <div className="relative max-w-2xl mx-auto text-center pt-8 pb-16">
          
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase leading-[1.1] tracking-tight mb-6" style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}>
            Pronto para proteger{" "}
            <span className="text-primary block mt-2">seu veículo?</span>
          </h2>

          <p className="text-white/70 text-base mb-10 max-w-md mx-auto leading-relaxed font-light">
            Perca o medo do imprevisto. Junte-se a milhares de motoristas com nossa tecnologia embarcada e monitoramento 24h.
          </p>

          <a
            href="https://wa.me/5591991837470"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-md mx-auto"
          >
            <button
              className="w-full flex items-center justify-center gap-3 font-display font-black text-[15px] uppercase tracking-[0.1em] text-white bg-primary py-5 px-6 rounded-none border-none cursor-pointer shadow-[0_10px_40px_hsl(var(--primary)/0.5)] hover:bg-primary/90 hover:shadow-[0_10px_60px_hsl(var(--primary)/0.7)] transition-all hover:-translate-y-1 active:scale-95 group"
            >
              <span>Falar com um atendente</span>
              <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent z-10" />
    </section>
  );
};

export default CTA;
