import { MapPin, Shield, Smartphone, Bell, Route, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Rastreamento em Tempo Real",
    description: "Acompanhe a localização exata do seu veículo a qualquer momento pelo app ou plataforma web.",
  },
  {
    icon: Shield,
    title: "Proteção Contra Roubo",
    description: "Sistema de bloqueio remoto e alertas instantâneos em caso de movimentação não autorizada.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Notificações personalizadas de velocidade, cerca virtual e manutenção preventiva.",
  },
  {
    icon: Route,
    title: "Histórico de Rotas",
    description: "Consulte o histórico completo de trajetos realizados com detalhes de velocidade e paradas.",
  },
  {
    icon: Smartphone,
    title: "App Completo",
    description: "Aplicativo disponível para iOS e Android com interface intuitiva e fácil de usar.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Relatórios de quilometragem, consumo e comportamento do motorista para gestão de frotas.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-display font-semibold text-sm uppercase tracking-widest mb-3">
            Recursos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologia avançada para garantir a segurança e o controle total da sua frota.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
