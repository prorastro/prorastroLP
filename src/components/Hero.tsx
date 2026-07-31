import { MapPin, MessageCircle, Navigation, ShieldCheck, Users, Clock, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const WHATSAPP = "https://wa.me/5591984000000?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20da%20Rastro%20F%C3%A1cil%20GPS.";

type Stat = { icon: typeof Users; label: string; count?: number; prefix?: string; suffix?: string; text?: string };

const STATS: Stat[] = [
  { icon: Users, count: 3000, prefix: "+", label: "Clientes ativos" },
  { icon: MapPin, count: 100, suffix: "%", label: "Cobertura nacional" },
  { icon: Clock, count: 24, suffix: "h", label: "Monitoramento" },
  { icon: Headphones, text: "Suporte", label: "Especializado" },
];

/** Mockup de painel de rastreamento (laptop + celular) construído em CSS/SVG. */
const DeviceMockup = () => (
  <div className="relative mx-auto w-full max-w-[560px]">
    {/* glow */}
    <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-[radial-gradient(circle_at_60%_40%,hsl(213_94%_55%/0.5),transparent_60%)]" />

    {/* Laptop */}
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative"
    >
      <div className="rounded-t-2xl border border-white/15 bg-slate-900/90 p-3 shadow-2xl shadow-black/50">
        <div className="rounded-lg overflow-hidden bg-slate-800 aspect-[16/10] relative">
          {/* map */}
          <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="mapbg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#dbeafe" />
                <stop offset="1" stopColor="#eff6ff" />
              </linearGradient>
            </defs>
            <rect width="400" height="250" fill="url(#mapbg)" />
            {/* ruas */}
            <g stroke="#c7d7f5" strokeWidth="8" fill="none" strokeLinecap="round">
              <path d="M-10 60 H410" />
              <path d="M-10 150 H410" />
              <path d="M90 -10 V260" />
              <path d="M260 -10 V260" />
            </g>
            <g stroke="#e2e8f0" strokeWidth="3" fill="none">
              <path d="M-10 105 H410" />
              <path d="M175 -10 V260" />
              <path d="M330 -10 V260" />
            </g>
            {/* rota */}
            <path d="M50 210 C 120 180, 100 110, 175 100 S 300 90, 350 45"
              fill="none" stroke="#2563eb" strokeWidth="5" strokeLinecap="round"
              strokeDasharray="480" strokeDashoffset="480">
              <animate attributeName="stroke-dashoffset" from="480" to="0" dur="2.2s" begin="0.6s" fill="freeze" />
            </path>
            <circle cx="50" cy="210" r="6" fill="#2563eb" />
            {/* pin destino */}
            <g transform="translate(350 45)">
              <circle r="14" fill="#2563eb" opacity="0.18">
                <animate attributeName="r" values="10;22;10" dur="2s" repeatCount="indefinite" />
              </circle>
              <path d="M0 -13 C 7 -13 12 -8 12 -1 C 12 7 0 14 0 14 C 0 14 -12 7 -12 -1 C -12 -8 -7 -13 0 -13 Z" fill="#2563eb" />
              <circle cy="-1" r="4" fill="#fff" />
            </g>
          </svg>
          {/* chip flutuante */}
          <div className="absolute left-3 top-3 rounded-lg bg-white/95 px-3 py-2 shadow-lg backdrop-blur text-slate-800">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center h-6 w-6 rounded-md bg-primary/10 text-primary">
                <Navigation className="h-3.5 w-3.5" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.6rem] font-semibold">ABC-1234</p>
                <p className="text-[0.55rem] text-emerald-600 font-medium">Em movimento • 64 km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* base */}
      <div className="h-3 rounded-b-xl bg-slate-700/90" />
      <div className="mx-auto h-1.5 w-1/3 rounded-b-lg bg-slate-600/80" />
    </motion.div>

    {/* Celular sobreposto */}
    <motion.div
      initial={{ opacity: 0, y: 40, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="absolute -right-2 -bottom-6 w-32 sm:w-36 animate-float-slow"
    >
      <div className="rounded-[1.6rem] border-[5px] border-slate-900 bg-slate-900 shadow-2xl shadow-black/50">
        <div className="rounded-[1.2rem] overflow-hidden bg-white">
          <div className="bg-gradient-to-br from-primary to-accent px-3 pt-4 pb-3 text-white">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              <span className="text-[0.55rem] font-semibold">Rastro Fácil</span>
            </div>
            <p className="mt-2 text-[0.55rem] opacity-80">Veículo</p>
            <p className="text-[0.7rem] font-bold">ABC-1234</p>
          </div>
          <div className="p-2.5 space-y-1.5">
            {[["Status", "Ligado"], ["Velocidade", "64 km/h"], ["Bateria", "98%"]].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-[0.55rem]">
                <span className="text-slate-400">{k}</span>
                <span className="font-semibold text-slate-700">{v}</span>
              </div>
            ))}
            <div className="!mt-2.5 rounded-md bg-primary py-1.5 text-center text-[0.55rem] font-semibold text-white">
              Bloquear veículo
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const Hero = () => (
  <section id="inicio" className="aurora relative overflow-hidden bg-navy-gradient text-white">
    <div className="absolute inset-0 grid-overlay opacity-60" />
    <div className="absolute inset-0 grain opacity-[0.12] mix-blend-overlay pointer-events-none" />

    <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* Texto */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Rastreamento veicular
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight"
          >
            Rastro Fácil <span className="text-shine">GPS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-md text-base md:text-lg text-white/70 leading-relaxed"
          >
            Proteja o que é seu com tecnologia de ponta. Rastreamento em tempo real,
            bloqueio remoto, histórico de rotas e muito mais na palma da sua mão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/40 neu-pressable transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:scale-95"
            >
              <ShieldCheck className="h-4 w-4" />
              Solicitar orçamento
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 neu-dark px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 neu-dark text-accent">
                  <s.icon className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="font-bold text-white text-lg">
                    {s.text ? s.text : <CountUp to={s.count!} prefix={s.prefix} suffix={s.suffix} />}
                  </p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative">
          <DeviceMockup />
        </div>
      </div>
    </div>

    {/* onda inferior para transição suave */}
    <div className="relative">
      <svg className="block w-full h-[60px] md:h-[90px]" viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d="M0 90 L0 40 C 240 90 480 10 720 30 C 960 50 1200 90 1440 35 L1440 90 Z" fill="hsl(var(--background))" />
      </svg>
    </div>
  </section>
);

export default Hero;
