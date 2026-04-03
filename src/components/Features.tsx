import { MapPin, Shield, Smartphone, Bell, Route, BarChart3 } from "lucide-react";

const featuresLeft = [
  {
    icon: MapPin,
    title: "Rastreamento em Tempo Real",
    description:
      "Posicionamento atualizado a cada instante via nuvem. Latitude e longitude exata sem delays.",
  },
  {
    icon: Shield,
    title: "Desarme Anti-Roubo",
    description:
      "Corte a bomba de combustível remotamente pelo app. Um toque e o veículo para na hora.",
  },
  {
    icon: Route,
    title: "Logs de Trajetos",
    description:
      "Playback completo de rotas com métricas de velocidade, paradas e freadas.",
  },
];

const featuresRight = [
  {
    icon: Bell,
    title: "Alarme Geofence",
    description:
      "Crie cercas virtuais invisíveis. Se transpassadas, você é alertado em segundos.",
  },
  {
    icon: Smartphone,
    title: "App iOS & Android",
    description:
      "Interface sombria e intuitiva. Controle total na palma da sua mão, a qualquer hora.",
  },
  {
    icon: BarChart3,
    title: "Métricas de Frota",
    description:
      "Quilometragem, consumo e padrão de condução em relatórios exportáveis com dois toques.",
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
  <div
    className={`group flex gap-4 items-start ${align === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}
  >
    <div className="flex-shrink-0 w-10 h-10 bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
      <Icon className="h-5 w-5 text-white/40 group-hover:text-primary transition-colors duration-300" />
    </div>
    <div>
      <h3 className="font-display text-[13px] font-black text-white uppercase tracking-widest mb-1">
        {title}
      </h3>
      <p className="text-white/40 text-[12px] font-light leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="recursos" className="py-24 md:py-32 bg-[#040404] relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Tactical grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary font-display font-black text-xs uppercase tracking-[0.4em] mb-4 opacity-90">
            Recursos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            Engenharia de ponta projetada para entregar controle total sobre sua operação veicular.
          </p>
        </div>

        {/* Split-screen layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-0">

          {/* Left features */}
          <div className="flex flex-col gap-8 md:gap-10 flex-1 md:pr-8">
            {featuresLeft.map((f) => (
              <FeatureItem key={f.title} {...f} align="left" />
            ))}
          </div>

          {/* Center car image */}
          <div className="relative flex-shrink-0 w-56 md:w-72 lg:w-80 mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full scale-75" />
            {/* Corner accents */}
            <div className="absolute top-0 left-0 border-t-2 border-l-2 border-primary/50 w-6 h-6 z-10" />
            <div className="absolute top-0 right-0 border-t-2 border-r-2 border-primary/50 w-6 h-6 z-10" />
            <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-primary/50 w-6 h-6 z-10" />
            <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-primary/50 w-6 h-6 z-10" />
            <img
              src="/car-top-view.png"
              alt="Veículo rastreado pela Prorastro"
              className="relative z-10 w-full drop-shadow-[0_0_40px_rgba(235,19,19,0.25)]"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right features */}
          <div className="flex flex-col gap-8 md:gap-10 flex-1 md:pl-8">
            {featuresRight.map((f) => (
              <FeatureItem key={f.title} {...f} align="right" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
