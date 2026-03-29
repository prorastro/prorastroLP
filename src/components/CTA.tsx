import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-16 md:py-24">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--primary)/0.12),transparent)]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="relative max-w-2xl mx-auto rounded-none bg-[#0c0c0c] border border-white/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9)]">

          {/* Top accent bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Inner glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,hsl(var(--primary)/0.08),transparent)]" />

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-none border border-primary/30 bg-primary/5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-primary uppercase">Sistema Ativo</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase leading-tight tracking-tight mb-4">
              Pronto para proteger{" "}
              <span className="text-primary">seu veículo?</span>
            </h2>

            <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed font-light">
              Perca o medo do imprevisto. Junte-se a milhares de motoristas com nossa tecnologia embarcada.
            </p>

            <a
              href="https://wa.me/5591991837470"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button
                className="w-full flex items-center justify-center gap-2 font-display font-bold text-sm text-white bg-primary py-5 px-6 rounded-none border-none cursor-pointer shadow-[0_10px_40px_hsl(var(--primary)/0.4)] hover:bg-primary/90 hover:shadow-[0_10px_60px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5 active:scale-95 group"
                style={{ whiteSpace: "normal", wordBreak: "keep-all" }}
              >
                <span>Falar com um atendente</span>
                <ArrowRight className="h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>

            {/* Trust note */}
            <p className="mt-5 text-[11px] text-white/20 font-mono tracking-widest uppercase">
              Instalação em até 24h · Suporte dedicado
            </p>
          </div>

          {/* Bottom accent bar */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default CTA;
