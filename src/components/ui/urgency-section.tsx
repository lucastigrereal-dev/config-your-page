import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, Target, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="py-20 px-6 bg-destructive/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          No-show, leads frios e equipe desmotivada não se resolvem sozinhos.
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Mercado não espera: clínicas que profissionalizam vendas agora ganham 18 a 24 meses de vantagem competitiva. 
          <span className="text-destructive font-semibold"> Onde você estará daqui a um Ano?</span>
        </p>
        
        <div className="bg-gradient-to-r from-destructive/10 to-secondary/10 border border-destructive/20 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-destructive mb-2">Sem Estrutura</div>
              <div className="text-sm text-muted-foreground">Conversão baixa, equipe perdida, metas quebradas</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-destructive to-secondary mx-2"></div>
              <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-2">Com Lobôh</div>
              <div className="text-sm text-muted-foreground">Conversão alta, equipe motivada, metas batidas</div>
            </div>
          </div>
        </div>
        
        <Button variant="primary" size="lg" className="text-lg px-8 py-4">
          Agendar Diagnóstico Executivo
        </Button>
      </div>
    </section>
  );
};

export default UrgencySection;