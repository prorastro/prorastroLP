import { Cpu, Wifi, MapPin, Zap } from "lucide-react";

const Hardware = () => {
  return (
    <section className="py-32 relative bg-[#040404] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      
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
        <div className="text-center mb-20 relative">
          {/* Subtle dark backing for header text */}
          <div className="absolute -inset-10 bg-black/40 blur-3xl rounded-full -z-10" />
          
          <p className="text-primary font-display font-bold uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            <Cpu className="h-5 w-5" />
            <span>Infraestrutura</span>
          </p>
          <h2 className="font-display text-xl md:text-3xl lg:text-5xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-8">
            Hardware de <span className="text-primary">Nível Militar</span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-2xl mx-auto italic border-l-2 border-primary/40 pl-6 bg-black/20 backdrop-blur-sm py-4">
            Equipado com o módulo <strong className="text-primary font-bold">EG915N-LA</strong>. 
            Uma blindagem de dados capaz de processar telemetria em microssegundos. Inteligência bruta operando em silêncio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 pt-4">
          <div className="p-6 md:p-10 rounded-none bg-[#0D0D0D]/90 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 group-hover:text-primary transition-colors uppercase">DATA_LINK</div>
            <div className="w-16 h-16 rounded-none bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Wifi className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg md:text-2xl font-display font-black text-white mb-4 uppercase tracking-wider">Conectividade Crítica</h3>
            <p className="text-white/70 leading-relaxed font-light text-sm group-hover:text-white transition-colors">
              Link ininterrupto via chips M2M multioperadoras. Nossa rede global seleciona dinamicamente a torre com melhor SNR para garantir transmissão constante.
            </p>
          </div>

          <div className="p-6 md:p-10 rounded-none bg-[#0D0D0D]/90 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 group-hover:text-primary transition-colors uppercase">SHUT_DOWN</div>
            <div className="w-16 h-16 rounded-none bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Zap className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg md:text-2xl font-display font-black text-white mb-4 uppercase tracking-wider">Interceptação Remota</h3>
            <p className="text-white/70 leading-relaxed font-light text-sm group-hover:text-white transition-colors">
              Comando de bloqueio via relé de estado sólido. A interrupção de sistemas críticos ocorre com precisão cirúrgica em menos de 1 segundo após o comando.
            </p>
          </div>

          <div className="p-6 md:p-10 rounded-none bg-[#0D0D0D]/90 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 group-hover:text-primary transition-colors uppercase">SAT_PRECISION</div>
            <div className="w-16 h-16 rounded-none bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <MapPin className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg md:text-2xl font-display font-black text-white mb-4 uppercase tracking-wider">Geolocalização Ativa</h3>
            <p className="text-white/70 leading-relaxed font-light text-sm group-hover:text-white transition-colors">
              Processamento paralelo de constelações GLONASS + GPS. Margem de erro reduzida a centímetros, ignorando obstruções urbanas e interferências.
            </p>
          </div>

          <div className="p-6 md:p-10 rounded-none bg-[#0D0D0D]/90 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20 group-hover:text-primary transition-colors uppercase">FAIL_SAFE</div>
            <div className="w-16 h-16 rounded-none bg-black border border-white/10 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Cpu className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg md:text-2xl font-display font-black text-white mb-4 uppercase tracking-wider">Protocolo Anti-Sabotagem</h3>
            <p className="text-white/70 leading-relaxed font-light text-sm group-hover:text-white transition-colors">
              Backup energético de alta densidade. Alerta imediato de corte de energia física com transição automática para célula de energia interna protegida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
