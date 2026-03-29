import { MapPin, Shield, Zap, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMain from "@/assets/logo-main-editado.png";
import { useEffect, useRef, useState } from "react";

const FADE_OUT_MS   = 1200; // tempo para escurecer
const FADE_IN_MS    = 1200; // tempo para clarear
const BEFORE_END_S  = 1.5;  // segundos antes do fim para começar o fade out

const Hero = () => {
  const videoRef  = useRef<HTMLVideoElement>(null);
  const fading    = useRef(false);
  const [overlay, setOverlay]       = useState(0);   // 0 = transparente, 1 = preto
  const [fadeDuration, setFadeDuration] = useState(FADE_OUT_MS);
  const [videoVisible, setVideoVisible] = useState(false);

  // Fade-in inicial
  useEffect(() => {
    const t = setTimeout(() => setVideoVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration || fading.current) return;
      if (video.duration - video.currentTime <= BEFORE_END_S) {
        fading.current = true;

        // 1. Escurece (fade out)
        setFadeDuration(FADE_OUT_MS);
        setOverlay(1);

        // 2. Reseta e clareia (fade in)
        setTimeout(() => {
          video.currentTime = 0;
          video.play();
          setFadeDuration(FADE_IN_MS);
          setOverlay(0);

          setTimeout(() => {
            fading.current = false;
          }, FADE_IN_MS);
        }, FADE_OUT_MS);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video background */}
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          opacity: videoVisible ? 1 : 0,
          transitionDuration: "1800ms",
          transitionTimingFunction: "ease-in-out",
          willChange: "opacity",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay de fade to black no loop */}
        <div
          className="absolute inset-0 bg-background pointer-events-none"
          style={{
            opacity: overlay,
            transition: `opacity ${fadeDuration}ms ease-in-out`,
          }}
        />

        {/* High-Tech Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-screen"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center center"
          }}
        />
        {/* Glow Central cyber */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

        {/* Gradiente lateral */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        {/* Fade inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 md:py-48 flex flex-col justify-center min-h-screen">
        <div className="max-w-5xl space-y-8 md:space-y-10">
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          {/* Logo Column */}
          <div className="shrink-0" style={{ animationDelay: "100ms" }}>
            <img 
              src={logoMain} 
              alt="ProRastro Logo" 
              loading="eager"
              decoding="async"
              className="h-20 md:h-28 lg:h-32 w-auto object-contain filter drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)] mt-2"
            />
          </div>

          {/* Content Column */}
          <div className="flex-1 space-y-8 md:space-y-10">
            <div style={{ animationDelay: "150ms" }}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[4.8rem] font-black italic leading-none tracking-tighter text-white uppercase" style={{ textShadow: "0 10px 40px rgba(0,0,0,0.9)" }}>
                <span className="text-primary inline-block" style={{ filter: "drop-shadow(0 0 25px hsl(var(--primary) / 0.5))" }}>PRO</span>RASTRO
              </h1>
              <h2 className="mt-2 md:mt-1 text-base md:text-xl font-display font-medium uppercase tracking-[0.2em] text-white/90" style={{ textShadow: "0 4px 20px rgba(0,0,0,1)" }}>
                Tecnologia de Localização Tática
              </h2>
            </div>

            <div className="" style={{ animationDelay: "200ms" }}>
              <div className="border-l-[2px] border-primary pl-5 md:pl-8 py-2">
                <p className="text-base md:text-xl text-white/70 max-w-xl leading-relaxed font-light" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
                  Rastreamento em tempo real com cobertura total. Precisão absoluta para o seu 
                  patrimônio através de módulos de comunicação de grau industrial.
                </p>
                
                {/* Telemetry HUD */}
                <div className="mt-8 grid grid-cols-2 md:flex md:flex-wrap gap-x-8 gap-y-6 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-primary/80 uppercase">
                  <div className="space-y-1">
                    <div className="text-white/40">Status</div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-white/90">LIVE_TRACKING</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-white/40">Uptime</div>
                    <div className="text-white/90">99.98%_AVAIL</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-white/40">Latency</div>
                    <div className="text-white/90">&lt; 50MS_RESPONSE</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-4 w-full md:max-w-none" style={{ animationDelay: "300ms" }}>
              <a href="https://wa.me/5591991837470" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-xs sm:text-[11px] md:text-sm px-4 md:px-12 py-5 md:py-8 rounded-none font-display font-black uppercase tracking-[0.08em] md:tracking-[0.2em] transition-all hover:-translate-y-1 active:scale-95 bg-primary text-white hover:bg-primary/90 shadow-[0_10px_40px_hsl(var(--primary)/0.4)] relative overflow-hidden group border-none"
                >
                  <span className="relative z-10">Falar com um atendente</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </a>
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-xs sm:text-[11px] md:text-sm px-4 md:px-12 py-5 md:py-8 rounded-none font-display font-black uppercase tracking-[0.08em] md:tracking-[0.2em] bg-white/5 hover:bg-white/10 border border-white/20 text-white backdrop-blur-xl transition-all hover:-translate-y-1 active:scale-95 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
              >
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
