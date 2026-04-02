import { Cpu, Wifi, MapPin, Zap } from "lucide-react";

const Hardware = () => {
  return (
    <section className="py-24 bg-[#040404] relative overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Tactical Grid Overlay - EQUILIBRADO */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center center"
        }}
      />
      
      {/* Ambient Radial Glows - CENTRALIZADOS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container relative z-10 max-w-[1240px] mx-auto px-4 md:px-8">
        
        {/* HEADER */}
        <div className="mb-16 border-l-[3px] border-primary pl-6 max-w-4xl">
          <p className="text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4">
            Tracker Specification // J16 4G SIMCOM
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[64px] font-black text-white/90 leading-[1.1] uppercase tracking-tighter mb-8">
            Hardware <span className="text-white">de Nível Militar</span>
          </h2>
          <div className="text-white/50 leading-relaxed font-light text-base md:text-lg space-y-6">
            <p className="text-primary font-medium">Equipado internamente com o cérebro de processamento ultra veloz SIMCOM A7670SA Cat-1.</p>
            <p className="lg:pr-24">
              O rastreador automotivo J16 4G redefine as regras da segurança veicular. Em vez de utilizar placas obsoletas, ele é impulsionado pelo módulo de transmissão bruta da <strong>Simcom</strong>, entregando telemetria em microssegundos. É hardware de grau militar focado não em rastrear o seu veículo, mas em blindá-lo com dados.
            </p>
          </div>
        </div>

        {/* 2 COLUMNS */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
          
          {/* LADO ESQUERDO: CARDS GRID (No desktop esquerdo, no mobile embaixo) */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 order-2 lg:order-1">
            
            {/* CARD 1 */}
            <div className="bg-[#0D0D0D] p-8 lg:p-10 relative flex flex-col justify-start h-full group transition-colors hover:bg-[#111111]">
              <div className="mb-8 flex">
                <div className="w-10 h-10 bg-white/[0.02] flex items-center justify-center border border-white/5">
                  <Wifi className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-[15px] font-display font-black text-white/90 mb-4 uppercase tracking-widest leading-snug">
                Conectividade<br/>Simcom A7670SA
              </h3>
              <p className="text-white/40 leading-relaxed font-light text-[13px] mb-12 pr-4">
                O coração vital do tracker. Banda de dados LTE 4G que zera atrasos com o servidor, e fallback inteligente para sub-redes 2G em túneis profundos ou rodovias isoladas.
              </p>
              
              {/* Bottom Line Bar */}
              <div className="w-full h-[3px] bg-white/5 mt-auto relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-primary group-hover:w-[100%] transition-all duration-700 ease-out" />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#0D0D0D] p-8 lg:p-10 relative flex flex-col justify-start h-full group transition-colors hover:bg-[#111111]">
              <div className="mb-8 flex">
                <div className="w-10 h-10 bg-white/[0.02] flex items-center justify-center border border-white/5">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-[15px] font-display font-black text-white/90 mb-4 uppercase tracking-widest leading-snug">
                Bloqueio J16<br/>Extremo
              </h3>
              <p className="text-white/40 leading-relaxed font-light text-[13px] mb-12 pr-4">
                Circuito de desarme atrelado aos comandos vitais. A ordem transmitida via módulo Simcom imobiliza o corte de combustível em questão de milissegundos remotamente.
              </p>
              
              {/* Bottom Line Bar */}
              <div className="w-full h-[3px] bg-white/5 mt-auto relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-primary group-hover:w-[100%] transition-all duration-700 ease-out" />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#0D0D0D] p-8 lg:p-10 relative flex flex-col justify-start h-full group transition-colors hover:bg-[#111111]">
              <div className="mb-8 flex">
                <div className="w-10 h-10 bg-white/[0.02] flex items-center justify-center border border-white/5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-[15px] font-display font-black text-white/90 mb-4 uppercase tracking-widest leading-snug">
                GLONASS +<br/>GPS J16 4G
              </h3>
              <p className="text-white/40 leading-relaxed font-light text-[13px] mb-12 pr-4">
                Antena interna lendo órbitas em processamento nativo duplo. O hardware obtém a Fixação Quente (TTFF) e a margem brutal de erro de apenas {`<`}10m em exatos 2 segundos.
              </p>
              
              {/* Bottom Line Bar */}
              <div className="w-full h-[3px] bg-white/5 mt-auto relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-primary group-hover:w-[100%] transition-all duration-700 ease-out" />
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-[#0D0D0D] p-8 lg:p-10 relative flex flex-col justify-start h-full group transition-colors hover:bg-[#111111]">
              <div className="mb-8 flex">
                <div className="w-10 h-10 bg-white/[0.02] flex items-center justify-center border border-white/5">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
              </div>
              <h3 className="text-[15px] font-display font-black text-white/90 mb-4 uppercase tracking-widest leading-snug">
                Célula Blindada<br/>Integrada
              </h3>
              <p className="text-white/40 leading-relaxed font-light text-[13px] mb-12 pr-4">
                Se os fios da bateria do veículo sofrerem sabotagem, a CPU detecta via ACC e ativa sua célula secundária de 140mAh, disparando sinais ininterruptos de violação pelo painel.
              </p>
              
              {/* Bottom Line Bar */}
              <div className="w-full h-[3px] bg-white/5 mt-auto relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-primary group-hover:w-[100%] transition-all duration-700 ease-out" />
              </div>
            </div>

          </div>

          {/* LADO DIREITO: IMAGE FRAME & SPECS */}
          <div className="relative mt-8 lg:-ml-4 order-1 lg:order-2 flex flex-col justify-start">
             
             {/* CONTAINER DA MOLDURA E IMAGEM */}
             <div className="relative mb-16">
                 {/* Tech Texts */}
                 <div className="absolute -top-6 left-0 text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase">
                   TARGET_ID: TRACKER_J16_SIMCOM
                 </div>
                 
                 {/* Image Box */}
                 <div className="w-full bg-white/[0.02] border border-white/5 relative flex items-center justify-center mt-4 overflow-hidden group">
                   
                   {/* A IMAGEM EM 100% SEM CORTES */}
                   <img 
                     src="/hardware-img.png" 
                     alt="Tracker J16 4G Simcom" 
                     className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(235,19,19,0.3)] z-10 transition-transform duration-700 group-hover:scale-[1.05]"
                   />

                   {/* Inner Vignette to blend the edges of the image smoothly */}
                   <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,#040404_100%)] z-10 pointer-events-none opacity-80" />

                   {/* 4 Corner Brackets using Primary */}
                   <div className="absolute top-4 left-4 border-t-[3px] border-l-[3px] border-primary w-8 h-8 md:w-10 md:h-10 z-20 pointer-events-none" />
                   <div className="absolute top-4 right-4 border-t-[3px] border-r-[3px] border-primary w-8 h-8 md:w-10 md:h-10 z-20 pointer-events-none" />
                   <div className="absolute bottom-4 left-4 border-b-[3px] border-l-[3px] border-primary w-8 h-8 md:w-10 md:h-10 z-20 pointer-events-none" />
                   <div className="absolute bottom-4 right-4 border-b-[3px] border-r-[3px] border-primary w-8 h-8 md:w-10 md:h-10 z-20 pointer-events-none" />
                 </div>

                 {/* Tech Texts Bottom */}
                 <div className="absolute -bottom-10 right-0 text-[9px] font-mono text-white/30 tracking-[0.2em] uppercase">
                   FREQ: 4G LTE-FDD / CHIP M2M SIMCOM
                 </div>
             </div>

             {/* TEXTO DE ESPECIFICAÇÕES NO ESPAÇO VAZIO (Abaixo da Imagem) */}
             <div className="mt-auto pt-8 border-t border-white/5 relative bg-gradient-to-t from-black to-transparent">
                 <div className="mb-10 flex justify-between items-end">
                     <div>
                        <h3 className="font-mono text-white/40 text-[9px] tracking-[0.2em] uppercase mb-2">Ficha Técnica Oficial</h3>
                        <p className="text-white/80 font-display text-xl uppercase font-black tracking-widest leading-none">
                          Tracker <span className="text-primary">J16</span> 4G <span className="font-light text-white/50">Simcom</span>
                        </p>
                        <p className="max-w-xs text-white/50 text-[13px] leading-relaxed mt-4 font-light border-l border-white/10 pl-3">
                          Padrão-ouro global para auditoria e segurança. Este chassi é responsável por abrigar a arquitetura com o chipset da Simcom mais brutal do setor veicular. 
                        </p>
                     </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    <div>
                      <span className="block text-primary font-mono text-[9px] mb-2 tracking-widest uppercase">Tensão Multi-Chassi</span>
                      <span className="text-white/60 font-light text-[13px] leading-relaxed block">
                        Faixa brutal de tolerância variando de <strong>9V a 90V DC.</strong> Absorve oscilações elétricas insanas em Carretas e Máquinas Pesadas sem comprometer a CPU Simcom.
                      </span>
                    </div>
                    <div>
                      <span className="block text-primary font-mono text-[9px] mb-2 tracking-widest uppercase">Simcom Blind-Cache</span>
                      <span className="text-white/60 font-light text-[13px] leading-relaxed block">
                        Mecanismo de memória interna (DRAM Tracker). Permite o represamento exato de mais de <strong>8.000 checkpoints</strong> físicos quando o J16 entra em túneis subterrâneos ou cortes abruptos, despejando a trajetória íntegra no momento que reconecta.
                      </span>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
