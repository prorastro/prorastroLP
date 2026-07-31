import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WHATSAPP = "https://wa.me/5591984000000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20Rastro%20F%C3%A1cil%20GPS.";

const FAQS = [
  {
    q: "O rastreador funciona em motos?",
    a: "Sim! Instalamos em carros, motos, caminhões e frotas. Temos rastreadores específicos para cada tipo de veículo.",
  },
  {
    q: "Tem taxa de instalação?",
    a: "A instalação é feita por nossa equipe técnica. Fale conosco pelo WhatsApp para conhecer as condições e valores atualizados.",
  },
  {
    q: "Precisa de internet para o rastreador funcionar?",
    a: "Não. O rastreador possui um chip próprio com cobertura 4G nacional. Você só precisa de internet no seu celular para acessar o aplicativo.",
  },
  {
    q: "Como funciona a instalação?",
    a: "Você agenda o melhor dia e horário e nossa equipe vai até você. O processo é rápido, discreto e sem burocracia.",
  },
  {
    q: "Posso bloquear o veículo pelo celular?",
    a: "Sim, no Plano Completo você bloqueia e desbloqueia o motor do veículo remotamente, direto pelo aplicativo, em segundos.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Aceitamos Pix, cartão de crédito e boleto. A mensalidade pode ser paga de forma recorrente para sua comodidade.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container">
      <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Dúvidas frequentes</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
            Perguntas frequentes
          </h2>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full neu-sm neu-pressable px-5 py-3 text-sm font-semibold text-primary"
          >
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-5 gap-y-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl neu px-5 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FAQ;
