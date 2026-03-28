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
    <section id="faq" className="py-32 md:py-40 relative overflow-hidden bg-[#040404]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container max-w-4xl relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
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
                  "rounded-none overflow-hidden transition-all duration-500",
                  isOpen 
                    ? "bg-[#0E0E0E] shadow-[0_30px_80px_rgba(0,0,0,0.8)]" 
                    : "bg-[#080808] hover:bg-[#0A0A0A]"
                )}
              >
                <div className={cn("h-[1px] w-full transition-all duration-500", isOpen ? "bg-primary" : "bg-white/5")} />
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <span className={cn(
                    "font-display md:text-lg font-black transition-colors uppercase tracking-[0.15em]",
                    isOpen ? "text-primary" : "text-white/70 hover:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-none bg-white/5 flex items-center justify-center transition-all duration-300",
                    isOpen && "bg-primary text-white rotate-180 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                  )}>
                    <ChevronDown className="h-5 w-5" />
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
