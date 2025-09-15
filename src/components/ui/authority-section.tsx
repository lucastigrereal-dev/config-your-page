import { Card, CardContent } from "@/components/ui/card";
import { Quote, CheckCircle, TrendingUp, Users, Award } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Como a Loboh Já Transformou 150+ Clínicas em Máquinas de Conversão
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Case Principal */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-subtle border-primary/20 shadow-elegant">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    KARINA ESTÉTICA - BELO HORIZONTE
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-neutral">ANTES:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• 18% conversão</li>
                        <li>• R$45k/mês</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-success">DEPOIS:</h4>
                      <ul className="space-y-1 text-sm text-success">
                        <li>• 42% conversão</li>
                        <li>• R$127k/mês</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-cta/10 p-4 rounded-lg mb-4">
                    <p className="font-bold text-cta text-lg">
                      RESULTADO: +182% faturamento em 90 dias
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      MÉTODO: Sistema Loboh Sales Agile 360º
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/30" />
                  <blockquote className="italic text-lg text-foreground pl-8">
                    "Antes eu era médica fazendo venda. Hoje tenho uma EQUIPE vendendo enquanto eu opero."
                  </blockquote>
                  <cite className="block text-right text-sm font-semibold text-primary mt-2">
                    - Dra. Karina Santos
                  </cite>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Números de Autoridade */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-center text-secondary mb-8">
              NÚMEROS DE AUTORIDADE
            </h3>
            {authorityNumbers.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {item.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;