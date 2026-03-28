import { MapPin, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_VIDEO_URL = "https://videos.pexels.com/video-files/2053100/2053100-uhd_2560_1440_30fps.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster=""
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container relative z-10 py-24">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Zap className="h-4 w-4" />
            É Tecnologia em Localização
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-foreground">
            <span className="text-primary">Pro</span>Rastro
            <span className="block text-3xl md:text-4xl mt-4 font-sans font-normal text-muted-foreground">
              Proteção total para seu veículo
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Rastreamento em tempo real com cobertura nacional. Saiba onde seu veículo está 24 horas por dia, 7 dias por semana, com precisão e segurança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6 font-display font-semibold shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
              Solicitar Demonstração
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 font-display font-semibold">
              Conhecer Planos
            </Button>
          </div>

          <div className="flex gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Cobertura Nacional
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              Monitoramento 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
