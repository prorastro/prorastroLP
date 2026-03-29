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
    <section id="processo" className="py-32 md:py-40 bg-[#060606] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      {/* Background flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/[0.04] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] blur-[100px] pointer-events-none rounded-full" />

      <div className="container relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-primary font-display font-black text-xs uppercase tracking-[0.4em] mb-5 opacity-90">
            Processo
          </p>
          <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
            Em 3 passos,
            <span className="block text-primary mt-1" style={{ textShadow: "0 0 40px hsl(var(--primary)/0.4)" }}>
              seu veículo protegido
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 md:gap-8 relative">

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative flex flex-col transition-all duration-700"
            >
              {/* Card */}
              <div className="relative flex flex-col h-full rounded-none border-none bg-[#0D0D0D] p-10 transition-all duration-500 hover:bg-[#121212] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {/* Tactical Accent */}
                <div className="absolute top-0 left-0 w-16 h-1 bg-primary/80" />


{/* Icon + badge */}
                <div className="relative w-16 h-16 mb-10 z-10">
                  <div className="absolute inset-0 rounded-none bg-primary/5 border border-primary/20 group-hover:bg-primary transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-none bg-primary flex items-center justify-center text-[11px] font-black text-white shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="font-display text-base md:text-lg font-black text-white mb-3 uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
