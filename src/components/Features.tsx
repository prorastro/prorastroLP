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
    <section id="recursos" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Recursos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologia avançada para garantir a segurança e o controle total da sua frota.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                "group rounded-2xl border border-white/5 bg-[#0D0D0D] p-8 transition-all duration-300 hover:border-primary/30 hover:bg-[#121212] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 border border-primary/20 p-4 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:text-white">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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
