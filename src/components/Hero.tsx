import { MapPin, Shield, Zap, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="container relative z-10 py-32 md:py-48 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl space-y-8 md:space-y-10">
          
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-black leading-none tracking-tight text-white uppercase" style={{ textShadow: "0 4px 30px rgba(0,0,0,0.8)" }}>
              <span className="text-primary" style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.6)" }}>PRO</span>RASTRO
            </h1>
            <h2 className="mt-5 md:mt-6 text-2xl md:text-4xl font-display font-bold uppercase tracking-[0.15em] text-white/95" style={{ textShadow: "0 4px 20px rgba(0,0,0,1)" }}>
              É Tecnologia em Localização
            </h2>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light border-l-[3px] border-primary pl-6" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>
              Rastreamento em tempo real com cobertura nacional. Saiba onde seu
              veículo está 24 horas por dia, 7 dias por semana, com absoluta precisão e
              segurança impecáveis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button
              size="lg"
              className="text-lg px-10 py-7 md:py-8 rounded-xl font-display font-semibold transition-all hover:-translate-y-1 active:scale-95 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_8px_30px_hsl(var(--primary)/0.4)] border border-primary/50 relative overflow-hidden group"
            >
              <span className="relative z-10">Solicitar Demonstração</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 md:py-8 rounded-xl font-display font-semibold bg-white/5 hover:bg-white/10 border border-white/15 text-white backdrop-blur-xl transition-all hover:-translate-y-1 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            >
              Conhecer Planos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-y opacity-50">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
