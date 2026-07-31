import { Check, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/5591984000000?text=Ol%C3%A1!%20Quero%20contratar%20o%20plano%20";

const PLANS = [
  {
    name: "Plano Essencial",
    tagline: "Tudo que você precisa para proteger seu veículo.",
    price: "49,90",
    featured: false,
    features: [
      "Localização em tempo real",
      "Histórico de rotas",
      "Cerca virtual",
      "Aplicativo completo",
    ],
  },
  {
    name: "Plano Completo",
    tagline: "Máxima proteção e controle na palma da sua mão.",
    price: "69,90",
    featured: true,
    features: [
      "Tudo do plano Essencial",
      "Bloqueio remoto do veículo",
      "Alertas de ignição e movimento",
      "Suporte prioritário 24h",
    ],
  },
];

const StoreBadge = ({ store }: { store: "google" | "apple" }) => (
  <a
    href={WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2.5 rounded-2xl bg-slate-900 shadow-md neu-pressable px-4 py-2.5 text-white transition-transform hover:-translate-y-0.5"
  >
    {store === "google" ? (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path fill="#EA4335" d="M3.6 2.3C3.3 2.6 3.1 3 3.1 3.6v16.8c0 .6.2 1 .5 1.3l.1.1 9.4-9.4v-.2L3.6 2.3z" opacity="0" />
        <path fill="#00E5FF" d="M4.1 2.2 13.6 11.7l2.7-2.7L5.5 2.5c-.5-.3-1-.4-1.4-.3z" />
        <path fill="#00E676" d="M4.1 2.2 13.6 11.7 4.1 21.2c-.3-.2-.5-.6-.5-1.2V3.4c0-.6.2-1 .5-1.2z" opacity="0" />
        <path fill="#FFEA00" d="M13.6 11.7 4.1 2.2c.4-.2.9-.1 1.4.2l10.8 6.1-2.7 3.2z" opacity="0" />
        <path fill="#00E676" d="M3.6 2.4 13 11.7l-9.4 9.3c-.3-.2-.4-.6-.4-1.2V3.6c0-.6.1-1 .4-1.2z" />
        <path fill="#FFCE00" d="M13 11.7 3.6 2.4c.1-.1.2-.1.3-.2.4-.2.9-.1 1.4.2l10.8 6.1L13 11.7z" />
        <path fill="#FF3D00" d="M13 11.7 16.1 8.5l3.4 1.9c1 .6 1 1.6 0 2.2l-3.4 1.9L13 11.7z" />
        <path fill="#2979FF" d="M13 11.7 3.9 21c.4.3.9.2 1.4-.1l10.8-6.1L13 11.7z" />
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden>
        <path d="M16.5 1.9c0 1.1-.4 2.1-1.2 2.9-.9.9-2 1.5-3.1 1.4-.1-1.1.4-2.2 1.1-2.9.8-.9 2.1-1.5 3.2-1.4zM20.6 17c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.4 3.4-4.1 3.4-1.5 0-1.9-1-4-1-2 0-2.5 1-4 1-1.7 0-3-1.7-4-3.2-2.8-4.3-3.1-9.3-1.4-12 1.2-1.9 3.1-3 4.9-3 1.8 0 3 1 4.5 1 1.5 0 2.4-1 4.5-1 1.6 0 3.3.9 4.5 2.4-4 2.2-3.3 7.9.6 9.6z" />
      </svg>
    )}
    <span className="text-left leading-tight">
      <span className="block text-[0.55rem] opacity-80">Disponível {store === "google" ? "no" : "na"}</span>
      <span className="block text-sm font-semibold">{store === "google" ? "Google Play" : "App Store"}</span>
    </span>
  </a>
);

const Pricing = () => (
  <section id="planos" className="py-20 md:py-28">
    <div className="container">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-8 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Planos</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
            Escolha o plano<br />ideal para você
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-3xl p-6 md:p-7 flex flex-col ${
                plan.featured
                  ? "bg-navy-gradient text-white neu-dark ring-1 ring-primary/40"
                  : "neu neu-hover"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white shadow-lg">
                  Mais escolhido
                </span>
              )}
              <h3 className={`text-xl font-extrabold ${plan.featured ? "text-white" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <p className={`mt-1.5 text-sm ${plan.featured ? "text-white/70" : "text-muted-foreground"}`}>
                {plan.tagline}
              </p>
              <div className="mt-5 flex items-end gap-1">
                <span className={`text-sm font-semibold ${plan.featured ? "text-white/80" : "text-primary"}`}>R$</span>
                <span className={`text-4xl font-extrabold leading-none ${plan.featured ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`mb-1 text-sm ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>/mês</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 grid place-items-center h-6 w-6 rounded-full shrink-0 ${
                      plan.featured ? "neu-dark-inset text-accent" : "neu-inset text-primary"
                    }`}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={plan.featured ? "text-white/85" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP}${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all active:scale-95 ${
                  plan.featured
                    ? "bg-primary text-white shadow-lg shadow-primary/40 hover:bg-primary/90 neu-pressable"
                    : "neu-sm neu-pressable text-primary"
                }`}
              >
                Escolher plano
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Faixa de app */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 rounded-3xl neu-inset p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="hidden sm:grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 shrink-0">
            <MapPin className="h-7 w-7" />
          </span>
          <div>
            <h3 className="text-lg md:text-xl font-extrabold text-foreground">
              Todos os planos incluem acesso ao aplicativo completo
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Disponível para Android e iOS.</p>
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <StoreBadge store="google" />
          <StoreBadge store="apple" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
