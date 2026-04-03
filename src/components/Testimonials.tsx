// Removed useInView
import { Star, Shield, Car, Truck, MapPin, Zap, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const testimonials = [
  { text: "Coloquei no carro da minha filha que começou a dirigir agora. A paz de espírito de saber exatamente onde ela está quando volta da faculdade à noite não tem preço. O alerta de zona segura é sensacional.", author: "Helena Souza", role: "Mãe e Proprietária Particular", icon: Shield },
  { text: "Trabalho como entregador e minha moto é meu único sustento. Deixar ela na rua sempre foi uma tortura, mas agora com o bloqueio pelo celular eu trabalho muito mais tranquilo. Já recomendei pra todo o grupo.", author: "João silva", role: "Entregador Autônomo", icon: Zap },
  { text: "Tive meu carro levado em um assalto e recuperei em menos de 30 minutos. Bloqueei o motor pelo app ainda tremendo, e a polícia achou ele parado no bairro vizinho. O rastreador se pagou ali mesmo.", author: "Marcos Oliveira", role: "Proprietário de Veículo Particular", icon: Car },
  { text: "O que eu mais gosto é que não consome a bateria da moto. Já tive outros que descarregavam tudo se ficasse 3 dias parada. Esse da Prorastro é tecnologia de outro nível, muito confiável.", author: "Felipe Freitas", role: "Motociclista | Viagens e Lazer", icon: MapPin },
  { text: "Sou motorista de aplicativo e rodo muito em áreas que não conheço. O monitoramento em tempo real me dá a segurança necessária para trabalhar tranquilo. O atendimento da equipe no suporte é nota 10.", author: "Ricardo Santos", role: "Motorista de Aplicativo", icon: Zap },
  { text: "Moro em prédio sem garagem e meu carro fica na rua. O sensor de movimento me avisa no celular se alguém encostar no carro ou tentar abrir. É como ter um segurança 24h cuidando do meu patrimônio.", author: "Camila Fonseca", role: "Uso Pessoal Diário", icon: Smartphone },
  { text: "A precisão do GPS é absurda. Consigo ver até em qual lado da rua o carro está estacionado. O app é super intuitivo e não trava, bem diferente de outros que já testei no passado.", author: "André S.", role: "Proprietário de SUV", icon: MapPin },
  { text: "Instalação super limpa, não cortaram nenhum fio original do meu carro zero. Mantive a garantia de fábrica e agora tenho a segurança que o seguro sozinho não me dava.", author: "Lucas Ferreira", role: "Proprietário Particular", icon: Shield },
  { text: "O bloqueio remoto funciona muito rápido. Fiz o teste na garagem e o carro apagou em 3 segundos. Em caso de roubo, sei que os bandidos não vão longe com o meu carro.", author: "Patrícia Lima", role: "Usuária Prorastro", icon: Zap },
  { text: "O detalhamento das rotas me ajuda a controlar quanto gasto de combustível no mês. Além da segurança, acabou se tornando uma ferramenta de economia pro meu dia a dia.", author: "Bruno V.", role: "Vendedor Autônomo", icon: MapPin }
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
              Comunidade Prorastro
            </p>
            <div className="h-[1px] w-12 bg-primary/40 text-primary"></div>
          </div>
          
          <h2 className="font-display text-[26px] sm:text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
            Quem Usa <br className="md:hidden" /><span className="text-primary">E Recomenda</span>
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
              className="group relative shrink-0 w-[78vw] sm:w-[400px] md:w-[450px] bg-[#0D0D0D] p-6 sm:p-8 lg:p-10 flex flex-col border border-white/[0.03] transition-all duration-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-10 hover:z-20 hover:bg-[#121212] hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(235,19,19,0.15)]"
            >
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
