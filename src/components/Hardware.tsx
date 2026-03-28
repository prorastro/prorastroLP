import { Cpu, Wifi, MapPin, Zap } from "lucide-react";

const Hardware = () => {
  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden border-t border-primary/20">
      
      {/* AI Generated Circuit Board Background */}
      <img 
        src="/hardware-bg.png" 
        alt="Circuit Texture" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none mix-blend-screen"
      />
      
      {/* Gradients to fade edges smoothly into black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0" />

      <div className="container relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-display font-bold uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <Cpu className="h-5 w-5" />
            <span>Hardware Avançado</span>
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tight mb-6">
            O coração da sua <span className="text-primary/90">segurança</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
            Utilizamos o cobiçado módulo de precisão <strong className="text-white">EG915N-LA</strong>. 
            Um hardware blindado, capaz de processar dados em milissegundos. Seu carro jamais fica no escuro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 pt-4">
          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-primary/40 hover:bg-zinc-900/80 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-transform">
              <Wifi className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Conexão 4G LTE-M</h3>
            <p className="text-white/60 leading-relaxed">
              Sinal ininterrupto turbinado por chips M2M multioperadoras. A inteligência artificial seleciona sempre a melhor torre ao seu redor em tempo real.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-primary/40 hover:bg-zinc-900/80 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-transform">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Bloqueio Instantâneo</h3>
            <p className="text-white/60 leading-relaxed">
              Relé de estado sólido integrado. Um único toque no seu celular e o corte de ignição e injeção de combustível ocorre em milissegundos, com total segurança.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-primary/40 hover:bg-zinc-900/80 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-transform">
              <MapPin className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Antena GPS Ativa</h3>
            <p className="text-white/60 leading-relaxed">
              Receptor de constelação múltipla (GLONASS + GPS). Identifica a latitude e longitude exata do pneu do seu carro, não importa onde ele esteja escondido.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:border-primary/40 hover:bg-zinc-900/80 transition-all duration-500 group">
            <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-transform">
              <Cpu className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-3">Power Backup Automático</h3>
            <p className="text-white/60 leading-relaxed">
              Sistema anti-sabotagem inteligente. Se os criminosos cortarem a bateria principal do carro, o rastreador aciona a célula de sobrevivência e alerta imediatamente a central.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
