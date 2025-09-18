import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, CheckCircle, TrendingUp, TrendingDown, Users, Award } from "lucide-react";

const AuthoritySection = () => {
  const authorityNumbers = [
    { icon: Users, number: "150+", label: "clínicas transformadas" },
    { icon: TrendingUp, number: "R$47M", label: "em vendas geradas" },
    { icon: Award, number: "89%", label: "dos clientes recomendam" },
    { icon: CheckCircle, number: "8 anos", label: "especialistas em estética" }
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prova Social - Números e Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Números que sustentam a metodologia
          </p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Resultados</div>
            <div className="text-muted-foreground">Reais</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">R$47M</div>
            <div className="text-muted-foreground">em vendas geradas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">+182%</div>
            <div className="text-muted-foreground">faturamento médio em 90 dias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">de satisfação</div>
          </div>
        </div>

        {/* Success Story Card */}
        <Card className="mb-16 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Case — Karina Estética (Belo Horizonte)</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                    <TrendingDown className="h-6 w-6 text-destructive" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">ANTES</h4>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Conversão:</span>
                    <span className="font-bold text-destructive">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Faturamento:</span>
                    <span className="font-bold text-destructive">R$45k/mês</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">DEPOIS</h4>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Conversão:</span>
                    <span className="font-bold text-success">42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Faturamento:</span>
                    <span className="font-bold text-success">R$127k/mês</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-success/10 rounded-lg border border-success/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">Resultado: +182% de faturamento em 90 dias</div>
                <blockquote className="text-lg italic text-foreground mt-4">
                  "Antes eu era médica fazendo venda. Hoje tenho uma equipe vendendo enquanto eu opero."
                </blockquote>
                <cite className="text-secondary font-semibold mt-3 block">— Dra. Karina Santos</cite>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA after case */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Quero Ser o Próximo Case
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;