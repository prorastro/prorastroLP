import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
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
          Política de <span className="text-primary">Privacidade</span>
        </h1>

        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">1. Coleta de Dados</h2>
            <p>
              A ProRastro coleta dados de localização em tempo real do veículo cadastrado no sistema. Estes dados são estritamente para suporte à segurança e recuperação de ativos, não sendo compartilhados para fins publicitários.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">2. Finalidade do Uso</h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
               <li>Monitoramento do veículo em caso de furto ou roubo.</li>
               <li>Análise de telemetria para melhoria da eficiência de combustível e comportamento de condução.</li>
               <li>Notificação de alertas de ignição e cercas eletrônicas configuradas pelo próprio usuário.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">3. Compartilhamento com Autoridades</h2>
            <p>
              Em situações de crime confirmado (roubo/furto), a ProRastro compromete-se a fornecer as coordenadas geográficas às autoridades policiais competentes mediante solicitação oficial ou ordem judicial.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">4. Segurança dos Dados</h2>
            <p>
              Empregamos tecnologias de criptografia de ponta para proteger as informações geográficas enviadas pelos dispositivos de rastreamento para nossos servidores centrais, garantindo que terceiros não autorizados não tenham acesso ao seu percurso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-display font-black text-white uppercase tracking-wider">5. Direitos do LGPD</h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (LGPD), o usuário tem o direito de solicitar a exclusão de seu histórico de rotas dos nossos servidores a qualquer momento, o que será processado em até 15 dias úteis.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
