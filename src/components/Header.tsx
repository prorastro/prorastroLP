import { MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <MapPin className="h-6 w-6 text-primary" />
          <span><span className="text-primary">Pro</span>Rastro</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#recursos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </a>
          <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Planos
          </a>
          <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
          <Button size="sm" className="font-display font-semibold">
            Área do Cliente
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container flex flex-col gap-4 py-6">
            <a href="#recursos" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Recursos</a>
            <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Planos</a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Contato</a>
            <Button className="font-display font-semibold w-full">Área do Cliente</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
