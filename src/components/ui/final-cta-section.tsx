import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const FinalCtaSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Da Agenda Cheia ao Caixa Cheio Começa Agora
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Implemente o Sistema Lobôh e transforme cada consulta em faturamento real.
            </p>
        </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button variant="cta" size="lg" className="text-xl px-12 py-6">
                Agendar Diagnóstico Executivo
              </Button>
              <Button variant="outline-primary" size="lg" className="text-xl px-12 py-6">
                Falar com Especialista
              </Button>
            </div>

            {/* Simplified form hint */}
            <div className="max-w-md mx-auto text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Clique em "Diagnóstico Gratuito" para acessar nosso formulário completo de análise
              </p>
            </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;