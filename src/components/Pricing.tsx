import { Check, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const plans = [
  {
    name: "Básico",
    price: "50",
    description: "Segurança essencial para seu cotidiano",
    features: [
      "Rastreamento em tempo real",
      "Histórico de rotas",
      "Aplicativo para celular",
      "Suporte 24h",
    ],
    highlighted: false,
    note: null,
  },
  {
    name: "Plus",
    price: "70",
    description: "Proteção avançada com assistência tática",
    features: [
      "Rastreamento em tempo real",
      "Histórico de rotas",
      "Aplicativo para celular",
      "Suporte 24h",
      "Alerta de ignição",
      "Cerca eletrônica",
      "Suporte de guincho (roubo/furto)",
    ],
    highlighted: true,
    note: null,
  },
  {
    name: "Premium",
    price: "90",
    description: "O mais completo nível de blindagem",
    features: [
      "Tudo do plano Plus",
      "Troca da bateria (após 1 ano)",
      "WebTag de rastreamento extra",
      "Prioridade no atendimento",
    ],
    highlighted: false,
    note: "Adesão única: R$ 99,00",
  },
];

const Pricing = () => {
  const { ref } = useInView();

  return (
    <section id="planos" className="py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-display font-black text-sm uppercase tracking-[0.3em] mb-4">
            Investimento
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Escolha o plano ideal
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light">
            Soluções escaláveis de segurança projetadas para acompanhar a sua demanda, sem surpresas no contrato.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto px-4 md:px-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.highlighted ? "#0E0E0E" : "#080808",
                borderTop: plan.highlighted ? "4px solid hsl(var(--primary))" : "1px solid rgba(255,255,255,0.05)",
                boxShadow: plan.highlighted ? "0 30px 100px rgba(0,0,0,0.9)" : "none",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                padding: plan.highlighted ? "48px 40px 40px" : "40px",
              }}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div style={{ position: "absolute", top: "-18px", left: "50%", transform: "translateX(-50%)" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "hsl(var(--primary))",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      padding: "6px 20px",
                      boxShadow: "0 10px 30px rgba(255,0,0,0.4)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <ShieldCheck size={12} />
                    MELHOR PLANO
                  </div>
                </div>
              )}

              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "18px",
                  fontWeight: 900,
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "8px",
                }}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300, marginBottom: "24px", minHeight: "44px" }}>
                {plan.description}
              </p>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "4px",
                  paddingBottom: "24px",
                  marginBottom: "24px",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 700, marginTop: "8px" }}>R$</span>
                <span
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    fontSize: "52px",
                    fontWeight: 900,
                    color: "white",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 700, alignSelf: "flex-end", marginBottom: "4px" }}>/mês</span>
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", flexGrow: 1 }}>
                {plan.features.map((feature) => (
                  <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                    <Check
                      size={18}
                      style={{
                        flexShrink: 0,
                        marginTop: "2px",
                        color: plan.highlighted ? "hsl(var(--primary))" : "rgba(255,255,255,0.2)",
                      }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: 300, lineHeight: 1.5 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              {plan.note && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "10px",
                    color: "hsl(var(--primary) / 0.8)",
                    fontFamily: "monospace",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: "16px",
                  }}
                >
                  {plan.note}
                </p>
              )}

              {/* CTA Button */}
              <a href="https://wa.me/5591991837470" target="_blank" rel="noopener noreferrer">
                <button
                  style={{
                    width: "100%",
                    padding: "18px 24px",
                    background: plan.highlighted ? "hsl(var(--primary))" : "rgba(255,255,255,0.05)",
                    color: "white",
                    border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.1)",
                    fontSize: "12px",
                    fontFamily: "var(--font-display, sans-serif)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    cursor: "pointer",
                    boxShadow: plan.highlighted ? "0 15px 40px rgba(255,0,0,0.4)" : "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  Falar com um atendente
                </button>
              </a>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Pricing;
