import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background animate-page-in">
      <Header />
      <div className="container py-32 md:py-48 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-10 text-primary gap-2 hover:bg-primary/10">
            <ArrowLeft className="h-4 w-4" /> Voltar para o Site
          </Button>
        </Link>
        
        <h1 className="font-display text-4xl md:text-5xl font-black text-white italic mb-10 uppercase tracking-tight">
          Termos de <span className="text-primary">Uso</span>
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar os serviços da ProRastro, você concorda em cumprir estes Termos de Uso. Nossos serviços incluem rastreamento veicular, telemetria e assistência técnica. Se você não concorda com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">2. Descrição do Serviço</h2>
            <p>
              A ProRastro fornece tecnologia de monitoramento de ativos e segurança veicular. O serviço depende da disponibilidade de redes de telecomunicações e sinais de satélite (GPS). O usuário reconhece que instabilidades nestas redes externas podem afetar a precisão em tempo real.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">3. Obrigações do Usuário</h2>
            <p>
              O cliente compromete-se a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manter seus dados de acesso ao painel de rastreamento em total sigilo.</li>
              <li>Não utilizar o sistema para fins ilícitos ou monitoramento de terceiros sem consentimento legal.</li>
              <li>Informar imediatamente em caso de perda ou roubo do dispositivo móvel com o app instalado.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">4. Instalação e Manutenção</h2>
            <p>
              A instalação dos módulos deve ser realizada por técnicos credenciados pela ProRastro para garantir a validade da garantia. Qualquer tentativa de remoção ou violação do lacre do equipamento resultará na suspensão imediata dos serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">5. Pagamento e Cancelamento</h2>
            <p>
              Os planos são de assinatura mensal. O atraso no pagamento poderá resultar na suspensão temporária do sinal de rastreamento. Oferecemos política de "fidelidade zero", permitindo o cancelamento a qualquer momento mediante aviso prévio de 30 dias.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
