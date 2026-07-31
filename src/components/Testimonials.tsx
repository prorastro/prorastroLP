import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Carlos Menezes",
    role: "Motorista de app • Belém/PA",
    text: "Instalaram no mesmo dia e o app é muito fácil de usar. Já recuperei a tranquilidade de deixar o carro na rua.",
    initials: "CM",
  },
  {
    name: "Fernanda Lima",
    role: "Frota de entregas • Ananindeua/PA",
    text: "Acompanho todos os veículos em tempo real e o bloqueio remoto me dá muito mais segurança. Suporte nota 10.",
    initials: "FL",
  },
  {
    name: "Roberto Souza",
    role: "Moto própria • Marituba/PA",
    text: "Preço justo, sem fidelidade e funciona de verdade. Os alertas de movimento me avisam de tudo na hora.",
    initials: "RS",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Depoimentos</p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold text-foreground">
          Quem usa, recomenda
        </h2>
        <p className="mt-4 text-muted-foreground">
          Mais de 3.000 clientes ativos protegendo seus veículos com a Rastro Fácil GPS.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative ring-gradient rounded-3xl neu neu-hover p-6"
          >
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent text-white text-sm font-bold">
                {r.initials}
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
