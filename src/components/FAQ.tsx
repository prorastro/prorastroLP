import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

const faqs = [
  {
    question: "A instalação tem algum custo extra?",
    answer: "Não. A instalação é 100% gratuita para todos os nossos planos. Nossos técnicos credenciados vão até a sua residência ou empresa realizar o serviço com segurança.",
  },
  {
    question: "Existe período mínimo de fidelidade?",
    answer: "Nenhum. Não trabalhamos com retenção forçada. Você é livre para cancelar sua assinatura mensalista a qualquer momento sem nenhum tipo de multa.",
  },
  {
    question: "Posso realizar o bloqueio do veículo sozinho?",
    answer: "Sim! Pelo nosso aplicativo nativo, basta um clique e a senha mestra para efetuar o corte imediato da ignição e injeção do seu veículo em caso de furto.",
  },
  {
    question: "O rastreador funciona em rodovias ou locais remotos?",
    answer: "Utilizamos módulos GPRS e chips M2M de telemetria multioperadora. Se uma operadora perder o sinal em uma estrada, o aparelho troca para a melhor conexão automaticamente.",
  },
  {
    question: "Quanto tempo depois de fechar demora a instalação?",
    answer: "As instalações na região principal costumam ser resolvidas em até 48 horas úteis após a aprovação do plano. O tempo do serviço no carro dura cerca de 1 hora.",
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, inView } = useInView();

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden bg-black border-t border-white/5">
      <div className="container max-w-4xl relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <p className="text-primary font-display font-black text-sm uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-2">
            <MessageSquare className="h-4 w-4" /> Dúvidas Frequentes
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Perguntas & Respostas
          </h2>
          <p className="text-white/50 text-lg font-light">
            Informação transparente e direta sobre nossa tecnologia e serviços.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={cn(
                  "border rounded-2xl overflow-hidden transition-all duration-300",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                  isOpen 
                    ? "bg-[#0a0a0a] border-primary/40 shadow-[0_5px_30px_rgba(255,0,0,0.05)]" 
                    : "bg-[#050505] border-white/5 hover:border-white/10"
                )}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={cn(
                    "font-display md:text-lg font-bold transition-colors uppercase tracking-wide",
                    isOpen ? "text-primary" : "text-white/80 group-hover:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300",
                    isOpen && "bg-primary/20 text-primary rotate-180"
                  )}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden px-6 md:px-8">
                    <p className="text-white/50 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
