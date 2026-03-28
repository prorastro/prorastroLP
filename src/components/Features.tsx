import { MapPin, Shield, Smartphone, Bell, Route, BarChart3 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: MapPin,
    title: "Rastreamento em Tempo Real",
    description:
      "Acompanhe a localização exata do seu veículo a qualquer momento pelo app ou plataforma web.",
  },
  {
    icon: Shield,
    title: "Proteção Contra Roubo",
    description:
      "Sistema de bloqueio remoto e alertas instantâneos em caso de movimentação não autorizada.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Notificações personalizadas de velocidade, cerca virtual e manutenção preventiva.",
  },
  {
    icon: Route,
    title: "Histórico de Rotas",
    description:
      "Consulte o histórico completo de trajetos realizados com detalhes de velocidade e paradas.",
  },
  {
    icon: Smartphone,
    title: "App Completo",
    description:
      "Aplicativo disponível para iOS e Android com interface intuitiva e fácil de usar.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description:
      "Relatórios de quilometragem, consumo e comportamento do motorista para gestão de frotas.",
  },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <section id="recursos" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Recursos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Engenharia de ponta projetada para entregar controle total sobre sua operação veicular.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-none border-none bg-[#0D0D0D] p-10 transition-all duration-500 hover:bg-[#151515] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
            >
              <div className="mb-8 inline-flex rounded-none bg-primary/5 border border-primary/20 p-5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-black text-white mb-4 uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-sm font-light group-hover:text-white/60 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
