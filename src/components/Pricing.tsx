import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pessoal",
    price: "59",
    description: "Ideal para veículos particulares",
    features: [
      "Rastreamento em tempo real",
      "App para celular",
      "Alertas de velocidade",
      "Histórico de 30 dias",
      "Suporte por e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "99",
    description: "Para pequenas frotas e empresas",
    features: [
      "Tudo do plano Pessoal",
      "Cerca virtual ilimitada",
      "Bloqueio remoto",
      "Relatórios avançados",
      "Histórico de 90 dias",
      "Suporte prioritário 24h",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "179",
    description: "Gestão completa de frotas",
    features: [
      "Tudo do plano Profissional",
      "Dashboard de gestão",
      "API de integração",
      "Relatórios personalizados",
      "Histórico ilimitado",
      "Gerente de conta dedicado",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Planos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-muted-foreground text-lg">
            Planos flexíveis que se adaptam à sua necessidade, sem fidelidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-primary bg-primary/5 shadow-[0_0_40px_hsl(var(--primary)/0.12)] relative"
                  : "border border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-semibold px-4 py-1 rounded-full">
                  Mais Popular
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-1 mb-6">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-muted-foreground text-sm">R$</span>
                <span className="font-display text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                variant={plan.highlighted ? "default" : "outline"}
                className="w-full font-display font-semibold"
              >
                Contratar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
