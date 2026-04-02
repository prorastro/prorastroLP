// Removed useInView
import { Star, Shield, Car, Truck, MapPin, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const testimonials = [
  { text: "Gerenciamos uma frota de 40 veículos de transporte de valores. A precisão do sistema PR-750 e a baixa latência no bloqueio remoto foram decisivas em uma tentativa de interceptação no mês passado. Recuperamos o ativo em menos de 15 minutos.", author: "Ricardo Santos", role: "Diretor de Operações | Grupo Alpha Security", icon: Shield },
  { text: "Como colecionador de veículos de alto luxo, a segurança é minha prioridade número um. O hardware Prorastro é indetectável e o app me dá paz de espírito total. A telemetria avançada é um diferencial tático que nenhum outro player do mercado oferece.", author: "Dr. Eduardo M.", role: "Proprietário | Luxury Car Collection", icon: Car },
  { text: "A interface de comando no mobile é incrível. Gerencio minha logística de entrega em tempo real com mapas 3D. A bateria interna de backup já nos salvou em uma tentativa de sabotagem elétrica. Sistema robusto e confiável 100% do tempo.", author: "Mariana Vaz", role: "Gestora de Logística | Express Transp.", icon: Truck },
  { text: "Tivemos prejuízos alarmantes com desvio de rotas e combustível. Com a plataforma de relatório de percurso, em um mês identificamos os gargalos. Nossa eficiência subiu em 32%.", author: "Carlos P.", role: "CEO | TransNational", icon: Truck },
  { text: "O rastreamento não falhou uma única vez desde que implementamos nas nossas SUVs executivas. A instalação não alterou absolutamente nada na garantia de fábrica do motor. Profissionalismo ímpar.", author: "Roberto Dantas", role: "Diretor Executivo | VIP Rides", icon: Car },
  { text: "O alerta de cerca virtual me avisa instintivamente se o maquinário sair do canteiro de obras. Sem falsos positivos. Infraestrutura de bloqueio rápido é a melhor que já testamos.", author: "Fernando A.", role: "Engenheiro Chefe | Construtora Apex", icon: Shield },
  { text: "O painel de monitoramento massivo nos permite observar mais de 150 caminhões ao mesmo tempo na mesma tela sem travamentos ou falhas.", author: "Roberto Lima", role: "Coordenador | Logística Fast 24/7", icon: MapPin },
  { text: "Instalamos na frota de representantes comerciais. A acurácia do sinal em estradas de terra no interior isolado é simplesmente absurda, fruto do SIMCOM de alta performance.", author: "Sérgio Vieira", role: "Supervisão de Vendas | AgroTech", icon: Zap },
  { text: "Já fui assaltado antes, e o rastreador anterior perdeu o sinal. A ProRastro encontrou meu carro em 40 minutos em um galpão abandonado porque o Glonass cortou qualquer interferência.", author: "Marcos Ribeiro", role: "Motorista de Aplicativo", icon: Car },
  { text: "Um serviço muito além da tecnologia: o atendimento humanizado e cirúrgico da equipe em momentos de tensão na madruga fazem cada centavo valer a pena.", author: "Camila Fonseca", role: "Gerente de Frota | Ambulâncias SP", icon: Shield },
  { text: "Saber quando a van de entrega está exatamente parada na porta do cliente alavancou a confiança do meu restaurante a outro patamar. Absolutamente indispensável.", author: "Julio C.", role: "Sócio | FoodChain", icon: Truck },
  { text: "Bloqueio do motor direto celular é um show. Testei com o carro na garagem e o desarme foi instantâneo, coisa de 3 a 5 segundos no máximo.", author: "Rodrigo D.", role: "Uso Pessoal | Hilux SRX", icon: Zap },
  { text: "Uso na minha moto de alta cilindrada. O rastreador sendo à prova d'água e consumindo baixíssima carga da bateria preserva tudo intacto nas viagens do fim de semana.", author: "Felipe Freitas", role: "Proprietário | Ducati Panigale", icon: Zap },
  { text: "As quebras de velocidade acima de 120km/h reportam direto pro meu e-mail. Tenho o raio-x total da conduta de direção defensiva do meu quadro de motoristas.", author: "Leonardo M.", role: "Gerente Operacional | Expresso Leste", icon: Truck },
  { text: "Não confio no seguro sozinho e prefiro não arriscar. Com o backup de bateria do rastreador J16 eu tenho a certeza matemática de que não perco o carro em desmanches.", author: "André S.", role: "Diretor Comercial | Veículo Particular", icon: Shield },
  { text: "O detalhamento geográfico exato da posição em ruas minúsculas, não errando quarteirões, prova que a antena GPS desses equipamentos opera em alta definição espacial.", author: "Matheus N.", role: "CTO | Rota Inteligente", icon: MapPin },
  { text: "Mesmo em garagens de prédios de 3 subsolos o aparelho continua cuspindo dados de log se valendo da rede secundária LBS quando perde a vista pro céu.", author: "Tânia R.", role: "Moradora de Condomínio", icon: Shield },
  { text: "Equipe técnica muito competente e transparente na instalação. Tudo dissimulado e sem bagunça de fios no chicote original. Ninguém sabe onde o prato está.", author: "Alexandre K.", role: "Frota Executiva | Sedans Locação", icon: Car },
  { text: "A facilidade de emitir históricos de rodagem semanais diretamente pelo aplicativo facilitou demais a prestação de contas com o RH da empresa.", author: "Bruno V.", role: "Representante de Vendas", icon: MapPin },
  { text: "Quando meu pneu estourou na estrada sem iluminação, pude enviar até as coordenadas GPS cruas copiadas do app pro reboque para acharem meu carro no breu absoluto.", author: "Ramon Carvalho", role: "Uso Profissional e Particular", icon: Zap }
];

const Testimonials = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onWheel = (e: WheelEvent) => {
      // Find the carousel track to scroll
      const el = wrapper.querySelector('.carousel-track') as HTMLDivElement;
      if (!el || e.deltaY === 0) return;
      
      const isAtLeft = el.scrollLeft <= 0;
      // Added a larger margin of pixel-error tolerance for various screen scales (Math.ceil and +2 buffering)
      const isAtRight = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 2;

      // Translate vertical roll to horizontal movement seamlessly without trapping vertical navigation at the edges
      if ((e.deltaY > 0 && !isAtRight) || (e.deltaY < 0 && !isAtLeft)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#040404] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.03] blur-[150px] pointer-events-none rounded-full" />

      {/* Header Container - Max Width */}
      <div className="container relative z-10 max-w-7xl mx-auto px-4 mb-16 md:mb-20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-primary/40 text-primary"></div>
            <p className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-semibold">
              Operações Bem-Sucedidas
            </p>
            <div className="h-[1px] w-12 bg-primary/40 text-primary"></div>
          </div>
          
          <h2 className="font-display text-[26px] sm:text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
            Confiança <br className="md:hidden" /><span className="text-primary">Comprovada em Missão</span>
          </h2>
        </div>
      </div>

      {/* Full-width Carousel Container */}
      <div className="relative z-10 w-full overflow-hidden group/carousel" ref={wrapperRef}>
        {/* Left & Right gradient masks to blend the scroll visually on large screens */}
        <div className="absolute top-0 left-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-[#040404] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-[#040404] to-transparent z-20 pointer-events-none" />

        <div 
          className="carousel-track flex items-stretch overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 px-6 md:px-16 lg:px-32 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="group relative shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] bg-[#0D0D0D] p-8 lg:p-10 flex flex-col border border-white/[0.03] transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10 hover:z-20 hover:bg-[#121212] hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(235,19,19,0.15)]"
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 transition-colors group-hover:border-primary/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 transition-colors group-hover:border-primary/50" />

              {/* Stars */}
              <div className="flex gap-1.5 mb-8 shrink-0">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-primary fill-primary drop-shadow-[0_0_8px_rgba(235,19,19,0.8)]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 font-light italic leading-relaxed text-[13px] md:text-[15px] mb-12 flex-1 relative z-10">
                "{item.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5 relative z-10 shrink-0">
                <div className="w-12 h-12 bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                  <item.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-display text-white font-black uppercase text-sm md:text-[15px] tracking-wide mb-1">
                    {item.author}
                  </h4>
                  <p className="font-mono text-[8px] md:text-[9px] text-primary/80 uppercase tracking-[0.15em] leading-tight">
                    {item.role}
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

export default Testimonials;
