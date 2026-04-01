import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import prorastroFull from "@/assets/prorastro-full.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-2xl shadow-black/50 backdrop-blur-xl border-b border-white/5"
          : "bg-background/80 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center overflow-hidden">
          <img
            src={prorastroFull}
            alt="ProRastro"
            className={`h-12 md:h-14 w-auto object-contain transition-all duration-500 ease-in-out ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#recursos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Recursos
          </a>
          <a
            href="#planos"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Planos
          </a>
          <a
            href="#contato"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </a>
          <a
            href="https://wa.me/5591920006246?text=Ol%C3%A1,%20gostaria%20da%20segunda%20via%20da%20minha%20fatura."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            2ª Via Fatura
          </a>
          <a href="https://tracker.prorastro.com.br" target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="rounded-none font-display font-bold uppercase tracking-widest shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all hover:-translate-y-0.5"
            >
              Área do Cliente
            </Button>
          </a>
        </nav>

        <button
          className="md:hidden text-foreground p-1 hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-xl">
          <nav className="container flex flex-col gap-2 py-6">
            <a
              href="#recursos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/50"
              onClick={() => setMobileOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#planos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/50"
              onClick={() => setMobileOpen(false)}
            >
              Planos
            </a>
            <a
              href="#contato"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/50"
              onClick={() => setMobileOpen(false)}
            >
              Contato
            </a>
            <a
              href="https://wa.me/5591920006246?text=Ol%C3%A1,%20gostaria%20da%20segunda%20via%20da%20minha%20fatura."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors py-2 px-3 rounded-lg hover:bg-secondary/50"
              onClick={() => setMobileOpen(false)}
            >
              2ª Via Fatura
            </a>
            <a href="https://tracker.prorastro.com.br" target="_blank" rel="noopener noreferrer" className="mt-3">
              <Button className="rounded-none font-display font-bold uppercase tracking-widest w-full">
                Área do Cliente
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
