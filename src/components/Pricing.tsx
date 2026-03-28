import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "PESSOAL",
    price: "59",
    description: "Ideal para veículos particulares únicos",
    features: [
      "Rastreamento em tempo real",
      "Aplicativo iOS & Android",
      "Alertas de velocidade",
      "Histórico de 30 dias",
      "Suporte por e-mail",
    ],
    highlighted: false,
    cta: "CONTRATAR AGORA",
  },
  {
    name: "PROFISSIONAL",
    price: "99",
    description: "Para pequenas frotas empresariais",
    features: [
      "Tudo do plano Pessoal",
      "Cercas virtuais ilimitadas",
      "Bloqueio remoto antifurto",
      "Relatórios de performance",
      "Histórico de 90 dias",
      "Suporte prioritário 24h",
    ],
    highlighted: true,
    cta: "COMEÇAR AGORA",
  },
  {
    name: "EMPRESARIAL",
    price: "179",
    description: "Gestão completa para transportadoras",
    features: [
      "Tudo do plano Profissional",
      "Dashboard de frotas complexas",
      "API de integração (ERPs)",
      "Relatórios sob medida",
      "Histórico ilimitado",
      "Gerente de conta proativo",
    ],
    highlighted: false,
    cta: "FALAR COM VENDAS",
  },
];

const Pricing = () => {
  const { ref, inView } = useInView();

  return (
    <section id="planos" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative Red Cyber Grid & Blur */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <p className="text-primary font-display font-black text-sm uppercase tracking-[0.3em] mb-4">
            Investimento
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Escolha o plano ideal
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light">
            Soluções escaláveis de segurança projetadas para acompanhar a sua demanda, sem surpresas no contrato.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto items-center">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-[2rem] p-8 md:p-10 flex flex-col relative transition-all duration-500",
                plan.highlighted
                  ? "bg-[#111] border-2 border-primary/60 shadow-[0_0_50px_rgba(255,0,0,0.15)] z-20 scale-100 lg:scale-[1.05]"
                  : "bg-[#0a0a0a] border border-white/5 opacity-80 hover:opacity-100 hover:border-white/15 z-10 scale-100 hover:-translate-y-2",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={plan.highlighted ? {} : { transitionDelay: `${i * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-primary text-white text-[11px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(255,0,0,0.5)]">
                    <ShieldCheck className="h-4 w-4" />
                    Mais Vendido
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-2xl font-black text-white tracking-widest uppercase">
                  {plan.name}
                </h3>
                <p className="text-white/50 font-light mt-2 h-10">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/5">
                <div className="flex items-start gap-1">
                  <span className="text-white/40 text-sm font-bold mt-2">R$</span>
                  <span className="font-display text-6xl font-black text-white tracking-tighter leading-none">
                    {plan.price}
                  </span>
                  <span className="text-white/40 text-sm self-end mb-1 font-bold">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm md:text-base text-white/70 font-light"
                  >
                    <Check className={cn("h-5 w-5 shrink-0", plan.highlighted ? "text-primary" : "text-white/20")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={cn(
                  "w-full font-display text-sm md:text-base font-black tracking-widest uppercase rounded-xl py-6",
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary/90 shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:-translate-y-1 transition-transform"
                    : "bg-[#161616] text-white hover:bg-[#222] border-none"
                )}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/40 mt-16 font-light uppercase tracking-widest">
          Instalação gratuita &nbsp;|&nbsp; Zero fidelidade &nbsp;|&nbsp; Cancele a qualquer momento
        </p>
      </div>
    </section>
  );
};

export default Pricing;
