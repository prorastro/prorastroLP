import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border bg-secondary/30 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              TrackPro
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Líder em soluções de rastreamento veicular no Brasil. Segurança e tecnologia para você e sua frota.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@trackpro.com.br</li>
              <li>(11) 4002-8922</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TrackPro. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
