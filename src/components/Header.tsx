import { useEffect, useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP = "https://wa.me/5591984000000?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20da%20Rastro%20F%C3%A1cil%20GPS.";

const Logo = ({ dark = false }: { dark?: boolean }) => (
  <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
    <span className="relative grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
      <MapPin className="h-5 w-5 text-white" strokeWidth={2.5} />
    </span>
    <span className="leading-none">
      <span className={`block font-display font-extrabold text-lg tracking-tight ${dark ? "text-white" : "text-foreground"}`}>
        Rastro Fácil
      </span>
      <span className="block text-[0.6rem] font-semibold tracking-[0.35em] text-primary">GPS</span>
    </span>
  </a>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-[0_6px_20px_hsl(var(--neu-dark)/0.35)]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[72px]">
        <Logo dark={!scrolled} />

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/85"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 neu-pressable transition-all hover:-translate-y-0.5 hover:bg-primary/90 active:scale-95"
        >
          Solicitar orçamento
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`lg:hidden grid place-items-center h-10 w-10 rounded-lg transition-colors ${
            scrolled ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-background shadow-[0_10px_24px_hsl(var(--neu-dark)/0.4)]"
          >
            <div className="container py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
              >
                Solicitar orçamento
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
