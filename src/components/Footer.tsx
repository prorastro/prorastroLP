import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import prorastroFull from "@/assets/prorastro-full.png";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/prorastro_", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578119433995", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer id="contato" className="bg-black/30 backdrop-blur-md border-t border-white/5 relative z-10">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-16 mb-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-1">
            <a
              href="/"
              className="flex items-center mb-6"
            >
              <img
                src={prorastroFull}
                alt="ProRastro"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Tecnologia em localização. Líder em soluções de rastreamento
              veicular no Brasil.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-10 w-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="md:col-span-1">
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-widest text-sm">
              Suporte
            </h4>
            <ul className="space-y-4 text-sm text-white/45">
              <li>
                <a href="https://wa.me/5591991837470" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://wa.me/5591991837470" className="hover:text-primary transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  Contato
                </a>
              </li>
              <li>
                <Link to="/privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-display font-black text-white mb-6 uppercase tracking-widest text-sm">
              Contato
            </h4>
            <ul className="space-y-4 text-sm text-white/45">
              <li className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-none bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:tracker.prorastro@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  tracker.prorastro@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="h-8 w-8 rounded-none bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  href="https://wa.me/5591991837470"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (91) 99183-7470
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="h-8 w-8 rounded-none bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="group-hover:text-white transition-colors">Belém, PA — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-widest text-white/30">
          <span>
            © {new Date().getFullYear()} ProRastro. Todos os direitos
            reservados.
          </span>
          <div className="flex gap-4">
            <Link to="/termos" className="hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="hover:text-foreground transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
