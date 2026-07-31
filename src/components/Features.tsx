import { Zap, Map, FileText, Headphones, Monitor, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: Zap, title: "Instalação rápida", desc: "Processo simples e sem burocracia" },
  { icon: Map, title: "Cobertura nacional", desc: "Sinal em todo Brasil com tecnologia 4G" },
  { icon: FileText, title: "Sem fidelidade", desc: "Cancelamento fácil, sem multas" },
  { icon: Headphones, title: "Atendimento humano", desc: "Suporte especializado via WhatsApp" },
  { icon: Monitor, title: "Plataforma moderna", desc: "Sistema 100% online e intuitivo" },
  { icon: ShieldCheck, title: "Segurança 24 horas", desc: "Monitoramento contínuo" },
];

const Features = () => (
  <section id="recursos" className="relative py-20 md:py-28 overflow-hidden">
    {/* mapa Brasil pontilhado ao fundo */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[420px] w-[420px] dots-overlay opacity-40 [mask-image:radial-gradient(circle,black,transparent_70%)]" />

    <div className="container relative">
      <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Vantagens</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
            Por que escolher a<br />
            <span className="text-gradient">Rastro Fácil GPS?</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-sm">
            Tecnologia, praticidade e segurança para você acompanhar seu veículo de onde estiver.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group ring-gradient rounded-3xl neu neu-hover p-6"
            >
              <span className="grid place-items-center h-14 w-14 rounded-2xl neu-inset text-primary transition-colors group-hover:text-accent">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;
