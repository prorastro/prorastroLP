import { MapPin, Lock, Route, Bell, Smartphone, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const ITEMS = [
  { icon: MapPin, title: "Localização", sub: "em tempo real" },
  { icon: Lock, title: "Bloqueio", sub: "remoto" },
  { icon: Route, title: "Histórico", sub: "de rotas" },
  { icon: Bell, title: "Alertas", sub: "inteligentes" },
  { icon: Smartphone, title: "App", sub: "Android e iOS" },
  { icon: Headphones, title: "Suporte", sub: "24h via WhatsApp" },
];

const FeatureStrip = () => (
  <div className="container relative z-20 -mt-10 md:-mt-16">
    <div className="rounded-3xl neu px-4 py-6 md:px-8 md:py-7">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6">
        {ITEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-3 group"
          >
            <span className="grid place-items-center h-12 w-12 shrink-0 rounded-2xl neu-inset text-primary transition-all group-hover:text-accent group-hover:scale-105">
              <item.icon className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default FeatureStrip;
