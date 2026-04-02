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
    <section id="recursos" className="py-32 bg-[#040404] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Tactical Faint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center center"
        }}
      />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-primary font-display font-black text-xs uppercase tracking-[0.4em] mb-4 opacity-90">
            Recursos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            Engenharia de ponta projetada para entregar controle total sobre sua operação veicular.
          </p>
        </div>

        {/* Tactical Bento Box Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-5">
          
          {/* Card 1: Rastreamento em Tempo Real - LARGE WIDTH */}
          <div className="group relative rounded-none bg-[#0D0D0D] border border-white/5 p-8 md:p-10 transition-all duration-500 hover:bg-[#111111] md:col-span-2 overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] group-hover:bg-primary/20 transition-all duration-700" />
             <div className="mb-8 flex items-center justify-between">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
             </div>
             <h3 className="font-display text-xl font-black text-white mb-3 uppercase tracking-wider">
               Rastreamento em Tempo Real
             </h3>
             <p className="text-white/40 leading-relaxed text-[13px] font-light md:pr-12">
               Posicionamento atualizado a cada instante. O hardware J16 desenha trajetórias cristalinas no mapa via nuvem, entregando a latitude e longitude exata da sua máquina a qualquer instante sem delays estressantes.
             </p>
             <div className="absolute bottom-4 right-4 border-b-[2px] border-r-[2px] border-primary/40 w-6 h-6 z-20 pointer-events-none" />
          </div>

          {/* Card 2: Proteção Contra Roubo - TALL HEIGHT */}
          <div className="group relative rounded-none bg-[#0D0D0D] border border-white/5 p-8 transition-all duration-500 hover:bg-[#111111] md:col-span-1 md:row-span-2 flex flex-col overflow-hidden">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-primary/5 blur-[50px] group-hover:bg-primary/10 transition-all duration-700" />
             <div className="mb-8 flex items-center justify-between">
                <div className="w-12 h-12 bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Shield className="h-6 w-6 text-white/50 group-hover:text-primary transition-colors" />
                </div>
             </div>
             <div className="mt-auto">
                <h3 className="font-display text-lg font-black text-white mb-3 uppercase tracking-wider">
                  Desarme Anti-Roubo
                </h3>
                <p className="text-white/40 leading-relaxed text-[13px] font-light">
                  Ordene o corte cirúrgico da bomba de combustível da ignição pelo seu próprio app. Um toque, e o veículo vira um peso morto na via pública.
                </p>
             </div>
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </div>

          {/* Card 3: Histórico - SMALL */}
          <div className="group relative rounded-none bg-[#0D0D0D] border border-white/5 p-8 transition-all duration-500 hover:bg-[#111111] overflow-hidden">
             <div className="mb-8 flex items-center justify-between">
                <div className="w-10 h-10 bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Route className="h-5 w-5 text-white/50 group-hover:text-primary transition-colors" />
                </div>
             </div>
             <h3 className="font-display text-[15px] font-black text-white mb-2 uppercase tracking-widest">
               Logs de Trajetos
             </h3>
             <p className="text-white/40 leading-relaxed text-[13px] font-light">
               Playbacks detalhados de histórico na rodovia com métricas de velocidade e freadas.
             </p>
          </div>

          {/* Card 4: Alertas - SMALL */}
          <div className="group relative rounded-none bg-[#0D0D0D] border border-white/5 p-8 transition-all duration-500 hover:bg-[#111111] overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(235,19,19,0.15)] hover:border-primary/30 z-10 hover:z-20">
             <div className="mb-8 flex items-center justify-between">
                <div className="w-10 h-10 bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Bell className="h-5 w-5 text-white/50 group-hover:text-primary transition-colors" />
                </div>
             </div>
             <h3 className="font-display text-[15px] font-black text-white mb-2 uppercase tracking-widest">
               Alarme Geofence
             </h3>
             <p className="text-white/40 leading-relaxed text-[13px] font-light">
               Crie barricadas virtuais invisíveis. Se a sua cerca virtual for transpassada, você saberá em segundos.
             </p>
          </div>

          {/* Card 5: App Completo - SMALL */}
          <div className="group relative rounded-none bg-[#0D0D0D] border border-white/5 p-8 transition-all duration-500 hover:bg-[#111111] overflow-hidden">
             <div className="mb-8 flex items-center justify-between">
                <div className="w-10 h-10 bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
                  <Smartphone className="h-5 w-5 text-white/50 group-hover:text-primary transition-colors" />
                </div>
             </div>
             <h3 className="font-display text-[15px] font-black text-white mb-2 uppercase tracking-widest">
               Base Militar de Bolso
             </h3>
             <p className="text-white/40 leading-relaxed text-[13px] font-light">
               UI sombria, intuitiva e instantânea rodando no seu iOS ou Android.
             </p>
             <div className="absolute top-4 left-4 border-t-[2px] border-l-[2px] border-white/10 w-4 h-4 z-20 pointer-events-none" />
          </div>

          {/* Card 6: Relatórios - LARGE WIDTH */}
          <div className="group relative rounded-none bg-[#0D0D0D] border border-white/5 p-8 md:p-10 transition-all duration-500 hover:bg-[#111111] md:col-span-2 overflow-hidden">
             <div className="absolute bottom-0 left-0 w-64 h-32 bg-primary/5 blur-[50px] group-hover:bg-primary/20 transition-all duration-700" />
             <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                 <div className="w-14 h-14 bg-white/[0.03] flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-all">
                   <BarChart3 className="h-6 w-6 text-white/50 group-hover:text-primary transition-colors" />
                 </div>
                 <div>
                   <h3 className="font-display text-xl font-black text-white mb-2 uppercase tracking-wider">
                     Métricas Analíticas de Frota
                   </h3>
                   <p className="text-white/40 leading-relaxed text-[13px] font-light max-w-xl">
                     Audite a quilometragem diária, despesas com combustível e padrão de condução do motorista em gráficos herméticos exportáveis com dois toques.
                   </p>
                 </div>
             </div>
             <div className="absolute right-0 bottom-0 top-0 w-1 bg-gradient-to-b from-transparent via-white/5 to-transparent scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500 ease-out" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
