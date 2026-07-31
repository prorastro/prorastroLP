import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const QUICK = [
  { label: "Início", href: "#inicio" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contato", href: "#contato" },
];

const RESOURCES = [
  "Localização em tempo real",
  "Bloqueio remoto",
  "Histórico de rotas",
  "Alertas inteligentes",
  "Aplicativo",
];

const SOCIAL = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => (
  <footer id="contato" className="relative overflow-hidden bg-navy-gradient text-white">
    <div className="absolute inset-0 grid-overlay opacity-40" />

    <div className="container relative py-16">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        {/* Marca */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
              <MapPin className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="leading-none">
              <span className="block font-display font-extrabold text-lg">Rastro Fácil</span>
              <span className="block text-[0.6rem] font-semibold tracking-[0.35em] text-accent">GPS</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
            Tecnologia e segurança para você ter total controle do seu veículo, onde quer que esteja.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIAL.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label="Rede social"
                className="grid place-items-center h-9 w-9 rounded-lg glass text-white/80 transition-colors hover:text-white hover:bg-white/15"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links rápidos */}
        <div>
          <h4 className="font-bold text-white/90">Links rápidos</h4>
          <ul className="mt-4 space-y-2.5">
            {QUICK.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recursos */}
        <div>
          <h4 className="font-bold text-white/90">Recursos</h4>
          <ul className="mt-4 space-y-2.5">
            {RESOURCES.map((l) => (
              <li key={l} className="text-sm text-white/60">{l}</li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="font-bold text-white/90">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-accent shrink-0" /> (91) 98400-0000</li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-accent shrink-0" /> contato@rastrofacilgps.com.br</li>
            <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 text-accent shrink-0" /> Belém - Pará</li>
            <li className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <span>Seg - Sex: 8h às 18h<br />Sábado: 8h às 12h</span>
            </li>
          </ul>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-white/90">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            Cobertura em todo Brasil
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Rastro Fácil GPS · Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link to="/privacidade" className="hover:text-accent">Privacidade</Link>
          <Link to="/termos" className="hover:text-accent">Termos</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
