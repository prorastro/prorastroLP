import { useState } from "react";
import { createPortal } from "react-dom";
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
    checkoutUrl: "https://www.asaas.com/c/rkb9mvhoc6cv39o1",
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
    checkoutUrl: "https://www.asaas.com/c/0mkeumed1nci4mjf",
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
    checkoutUrl: "https://www.asaas.com/c/r3ejuqh6jdq4x1a0",
  },
];

type Plan = (typeof plans)[number];

interface LeadModalProps {
  plan: Plan;
  onClose: () => void;
}

const LeadModal = ({ plan, onClose }: LeadModalProps) => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formatWhatsapp = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, whatsapp, email, plan: plan.name }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      window.open(plan.checkoutUrl, "_blank", "noopener,noreferrer");
      onClose();
    } catch {
      setError("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    fontSize: "14px",
    fontWeight: 300,
    outline: "none",
    boxSizing: "border-box",
  };

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0E0E0E",
          borderTop: "4px solid hsl(var(--primary))",
          padding: "40px",
          width: "100%",
          maxWidth: "440px",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,0.4)",
            fontSize: "20px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Header */}
        <p
          style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: "10px",
            fontWeight: 900,
            color: "hsl(var(--primary))",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: "8px",
          }}
        >
          Plano {plan.name}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: "20px",
            fontWeight: 900,
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "8px",
          }}
        >
          Quase lá!
        </h3>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 300, marginBottom: "28px" }}>
          Preencha seus dados para prosseguir para o pagamento.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="tel"
            placeholder="WhatsApp (ex: (91) 99999-9999)"
            value={whatsapp}
            onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))}
            required
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {error && (
            <p style={{ color: "hsl(var(--primary))", fontSize: "12px", textAlign: "center" }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "8px",
              width: "100%",
              padding: "18px 24px",
              background: loading ? "rgba(255,255,255,0.1)" : "hsl(var(--primary))",
              color: "white",
              border: "none",
              fontSize: "12px",
              fontFamily: "var(--font-display, sans-serif)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              cursor: loading ? "not-allowed" : "pointer",
              boxShadow: loading ? "none" : "0 15px 40px rgba(255,0,0,0.4)",
              transition: "all 0.2s ease",
            }}
          >
            {loading ? "Enviando..." : "Ir para o pagamento"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

const Pricing = () => {
  const { ref } = useInView();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  return (
    <>
      {selectedPlan && (
        <LeadModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}

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
                <button
                  onClick={() => setSelectedPlan(plan)}
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
                  Assinar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
