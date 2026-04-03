import { MapPin, Shield, Smartphone, Bell, Route, BarChart3 } from "lucide-react";
import { useState, useRef, useCallback } from "react";

const vehicles = [
  { src: "/car-top-view.png",  alt: "Carro rastreado pela Prorastro",  rotate: 0 },
  { src: "/moto-top-view.png", alt: "Moto rastreada pela Prorastro",   rotate: 39 },
];

const VehicleSlider = () => {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const dragStart = useRef<number | null>(null);

  const goTo = useCallback((next: number) => {
    if (fading) return;
    setFading(true);
    // Tempo para dar fade out total (0.3s transition + buffer)
    setTimeout(() => {
      setIndex(next);
      // Pequeno delay para garantir que o src da imagem carregou (mesmo sendo local)
      setTimeout(() => {
        setFading(false);
      }, 50);
    }, 300);
  }, [fading]);

  const next = () => goTo((index + 1) % vehicles.length);
  const prev = () => goTo((index - 1 + vehicles.length) % vehicles.length);

  const onTouchStart = (e: React.TouchEvent) => { dragStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    if (dragStart.current === null) return;
    const delta = e.changedTouches[0].clientX - dragStart.current;
    if (Math.abs(delta) > 40) { delta < 0 ? next() : prev(); }
    else { next(); }
    dragStart.current = null;
  };

  const fadeStyle: React.CSSProperties = { 
    transition: "opacity 0.3s ease-in-out, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)", 
    opacity: fading ? 0 : 1,
    transform: fading ? "scale(0.96) translateY(10px)" : "scale(1) translateY(0px)"
  };

  return (
    <div
      className="relative flex items-center justify-center select-none cursor-pointer"
      style={{ overflow: "visible" }}
      onClick={next}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div style={fadeStyle} className="relative flex items-center justify-center">
        {/* ── Radar desktop ── */}
        <div className="hidden md:block absolute pointer-events-none" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
          <div style={{ animation: "radar-spin 8s linear infinite", width: 0, height: 0 }}>
            <div style={{ position: "absolute", width: "200vw", height: "200vw", top: "-100vw", left: "-100vw", background: "conic-gradient(from 0deg, rgba(235,19,19,0) 0deg, rgba(235,19,19,0.05) 50deg, rgba(235,19,19,0.28) 70deg, rgba(235,19,19,0) 71deg, rgba(235,19,19,0) 360deg)", borderRadius: "50%" }} />
          </div>
          {[1,2,3,4,5].map((i) => (
            <div key={i} style={{ position: "absolute", borderRadius: "50%", border: "1px solid rgba(235,19,19,0.35)", width: `${i*18}vw`, height: `${i*18}vw`, top: `${-i*9}vw`, left: `${-i*9}vw`, animation: "radar-ring 4s ease-out infinite", animationDelay: `${(i-1)*0.8}s`, opacity: 0 }} />
          ))}
          {/* Bolinha central pulsante */}
          <div style={{ position: "absolute", width: 12, height: 12, top: -6, left: -6, borderRadius: "50%", background: "rgba(235,19,19,1)", boxShadow: "0 0 16px 4px rgba(235,19,19,0.7)", animation: "pulse-center 2s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 40, height: 1, top: 0, left: -20, background: "rgba(235,19,19,0.5)" }} />
          <div style={{ position: "absolute", width: 1, height: 40, top: -20, left: 0, background: "rgba(235,19,19,0.5)" }} />
        </div>

        {/* ── Radar mobile ── */}
        <div className="md:hidden absolute pointer-events-none" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", zIndex: 1 }}>
          <div style={{ animation: "radar-spin 8s linear infinite", width: 0, height: 0 }}>
            <div style={{ position: "absolute", width: "300vmax", height: "300vmax", top: "-150vmax", left: "-150vmax", background: "conic-gradient(from 0deg, rgba(235,19,19,0) 0deg, rgba(235,19,19,0.05) 50deg, rgba(235,19,19,0.28) 70deg, rgba(235,19,19,0) 71deg, rgba(235,19,19,0) 360deg)", borderRadius: "50%" }} />
          </div>
          {[1,2,3,4,5].map((i) => (
            <div key={i} style={{ position: "absolute", borderRadius: "50%", border: "1px solid rgba(235,19,19,0.35)", width: `${i*22}vmax`, height: `${i*22}vmax`, top: `${-i*11}vmax`, left: `${-i*11}vmax`, animation: "radar-ring 4s ease-out infinite", animationDelay: `${(i-1)*0.8}s`, opacity: 0 }} />
          ))}
          {/* Bolinha central tbm no mobile */}
          <div style={{ position: "absolute", width: 10, height: 10, top: -5, left: -5, borderRadius: "50%", background: "rgba(235,19,19,1)", boxShadow: "0 0 12px 3px rgba(235,19,19,0.6)", animation: "pulse-center 2s ease-in-out infinite" }} />
          <div style={{ position: "absolute", width: 40, height: 1, top: 0, left: -20, background: "rgba(235,19,19,0.5)" }} />
          <div style={{ position: "absolute", width: 1, height: 40, top: -20, left: 0, background: "rgba(235,19,19,0.5)" }} />
        </div>

        {/* ── Image ── */}
        <img
          src={vehicles[index].src}
          alt={vehicles[index].alt}
          className="w-full drop-shadow-[0_0_60px_rgba(235,19,19,0.5)]"
          style={{ zIndex: 10, position: "relative", transform: `rotate(${vehicles[index].rotate}deg)` }}
          draggable={false}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

const featuresLeft = [
  {
    icon: MapPin,
    title: "Rastreamento em Tempo Real",
    description: "Localização exata do veículo atualizada a cada instante, direto no app.",
  },
  {
    icon: Shield,
    title: "Desarme Anti-Roubo",
    description: "Bloqueie o veículo remotamente com um toque. Corte de combustível imediato.",
  },
  {
    icon: Route,
    title: "Logs de Trajetos",
    description: "Histórico completo de rotas com velocidade, paradas e freadas.",
  },
];

const featuresRight = [
  {
    icon: Bell,
    title: "Alarme Geofence",
    description: "Defina cercas virtuais e receba alertas ao instante em que forem cruzadas.",
  },
  {
    icon: Smartphone,
    title: "App iOS & Android",
    description: "Controle total na palma da mão, com interface rápida e intuitiva.",
  },
  {
    icon: BarChart3,
    title: "Métricas de Frota",
    description: "Relatórios de quilometragem, consumo e condução exportáveis em dois toques.",
  },
];

const FeatureItem = ({
  icon: Icon,
  title,
  description,
  align,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  align: "left" | "right";
}) => (
  <div className={`group flex gap-4 items-start ${align === "right" ? "flex-row-reverse" : "flex-row"}`}>
    <div
      className="flex-shrink-0 bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300"
      style={{ width: 44, height: 44 }}
    >
      <Icon className="h-5 w-5 text-white/40 group-hover:text-primary transition-colors duration-300" />
    </div>
    <div className={align === "right" ? "text-right" : "text-left"}>
      <h3 className="font-display text-[12px] font-black text-white uppercase tracking-[0.2em] mb-1.5 group-hover:text-primary/90 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-white/45 text-[12px] font-light leading-[1.7]">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="recursos" className="relative overflow-hidden" style={{ background: "#000" }}>

      {/* Tactical grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(235,19,19,1) 1px, transparent 1px), linear-gradient(90deg, rgba(235,19,19,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />



      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-20" />

      {/* ── Header — spans full width on top of split ── */}
      <div className="relative z-20 text-center max-w-3xl mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-16">
        <p className="text-primary font-display font-black text-xs uppercase tracking-[0.4em] mb-4 opacity-90">
          Recursos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
          Tudo que você precisa<br className="hidden md:block" /> em um só lugar
        </h2>
        <p className="text-white/50 text-base font-light leading-relaxed">
          Engenharia de ponta projetada para entregar controle total sobre sua operação veicular.
        </p>
      </div>

      {/* ── Mobile: stacked ── */}
      <div className="md:hidden flex flex-col items-center gap-16 px-6 pb-24">
        <div className="flex flex-col gap-8 w-full">
          {featuresLeft.map((f) => (
            <FeatureItem key={f.title} {...f} align="left" />
          ))}
        </div>
        <div className="relative my-4" style={{ overflow: "visible", width: 224, height: 440, flexShrink: 0 }}>

          <div className="absolute inset-0 bg-primary/15 blur-[50px] rounded-full" style={{ zIndex: 2 }} />
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
            <VehicleSlider />
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {featuresRight.map((f) => (
            <FeatureItem key={f.title} {...f} align="left" />
          ))}
        </div>
      </div>

      {/* ── Desktop: split body — car centered within this div ── */}
      <div className="hidden md:flex relative z-20 items-center pt-10 pb-24" style={{ minHeight: "520px" }}>

        {/* Left features — text right-aligned toward center */}
        <div className="w-1/2 flex flex-col gap-14 pr-[clamp(160px,17vw,260px)] pl-20 xl:pl-32">
          {featuresLeft.map((f) => (
            <FeatureItem key={f.title} {...f} align="right" />
          ))}
        </div>

        {/* Right features — text left-aligned toward center */}
        <div className="w-1/2 flex flex-col gap-14 pl-[clamp(160px,17vw,260px)] pr-20 xl:pr-32">
          {featuresRight.map((f) => (
            <FeatureItem key={f.title} {...f} align="left" />
          ))}
        </div>

        {/* Car — centered within the features body, not the whole section */}
        <div
          className="absolute z-30"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(200px, 17vw, 290px)",
          }}
        >

        <VehicleSlider />

        </div>

      </div>

      <style>{`
        @keyframes radar-ring {
          0%   { opacity: 0.6; transform: scale(0.85); }
          100% { opacity: 0;   transform: scale(1); }
        }
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-center {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.15); opacity: 0.8; }
        }
      `}</style>

      {/* Bottom spacing */}
      <div className="pb-24 md:pb-32" />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20" />
    </section>
  );
};

export default Features;
