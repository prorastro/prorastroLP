import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { MousePointerClick, Wrench, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Escolha seu Plano",
    desc: "Selecione o plano ideal para o seu veículo. Sem taxa de adesão, sem fidelidade — tudo transparente.",
    icon: MousePointerClick,
  },
  {
    number: "02",
    title: "Instalação Profissional",
    desc: "Nossa equipe técnica instala o dispositivo de forma rápida e discreta, sem interferência na elétrica do veículo.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Monitore pelo App",
    desc: "Acesse em tempo real pelo aplicativo. Localização, bloqueio e alertas na palma da mão, onde você estiver.",
    icon: Smartphone,
  },
];

const Process = () => {
  const { ref, inView } = useInView();

  return (
    <section id="processo" className="py-24 md:py-32 bg-[#080808] relative overflow-hidden border-t border-white/5">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <p className="text-primary font-display font-black text-sm uppercase tracking-[0.3em] mb-4">
            Processo
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            Em 3 passos,
            <span className="block text-primary/90 mt-2">seu veículo protegido</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          
          {/* Connecting Line (Only visible on desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={cn(
                "relative z-10 flex flex-col items-center text-center transition-all duration-700 bg-black/40 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none border border-white/5 md:border-none",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Giant Background Number */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 md:-translate-y-16 text-[8rem] md:text-[12rem] font-black text-white/[0.02] select-none pointer-events-none z-0">
                {step.number}
              </div>

              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center mb-6 relative z-10 group transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:-translate-y-2">
                <step.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                
                {/* Step Marker Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-black shadow-lg">
                  {i + 1}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-black text-white mb-4 uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed max-w-[280px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Process;
