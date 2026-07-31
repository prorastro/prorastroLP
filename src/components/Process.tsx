import { MessageSquare, Wrench, Smartphone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  { icon: MessageSquare, title: "Solicite um orçamento", desc: "Fale conosco pelo WhatsApp e receba seu orçamento." },
  { icon: Wrench, title: "Agende a instalação", desc: "Escolha o melhor dia e horário. Nossa equipe vai até você." },
  { icon: Smartphone, title: "Ative o aplicativo", desc: "Receba seu acesso e ative o app em minutos." },
  { icon: MapPin, title: "Acompanhe seu veículo", desc: "Rastreie em tempo real e tenha total controle e segurança." },
];

const Process = () => (
  <section id="como-funciona" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Como funciona</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-foreground">
          É simples e rápido
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
        {/* linha conectora */}
        <div className="hidden lg:block absolute top-[46px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative ring-gradient rounded-3xl neu neu-hover p-6 text-center"
          >
            <div className="mx-auto relative grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30">
              <step.icon className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 grid place-items-center h-7 w-7 rounded-full neu-sm text-primary text-xs font-extrabold">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-5 font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
