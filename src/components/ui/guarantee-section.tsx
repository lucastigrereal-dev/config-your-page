import { Shield, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-6 bg-success/5">
      <div className="max-w-4xl mx-auto">
        <Card className="border-success/20 bg-success/10">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="h-12 w-12 text-success-foreground" />
            </div>
            
            <div className="inline-block bg-success text-success-foreground px-6 py-2 rounded-full font-bold text-lg mb-6">
              GARANTIA 90 DIAS
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Garantia Total: Sem Resultado, Sem Pagamento
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Se em 90 dias você não aumentar sua conversão em pelo menos 40%, 
              devolvemos 100% do investimento. Simples assim.
            </p>
            
            <div className="flex items-center justify-center mt-8 text-success">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span className="font-semibold">100% Garantido ou seu dinheiro de volta</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuaranteeSection;