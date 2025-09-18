import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Users, Monitor, TrendingUp } from "lucide-react";

const FaqSectionNew = () => {
  const [activeCategory, setActiveCategory] = useState("operacao");

  const categories = [
    { id: "operacao", label: "Operação", icon: Settings },
    { id: "equipe", label: "Equipe", icon: Users },
    { id: "tecnologia", label: "Tecnologia", icon: Monitor },
    { id: "resultados", label: "Resultados", icon: TrendingUp }
  ];

  const faqData = {
    operacao: [
      {
        question: "Se eu já tenho demanda, por que mexer no comercial?",
        answer: "Agenda cheia não garante caixa cheio. Ajustamos ICP, processos e acompanhamento para que cada consulta tenha caminho claro até procedimento.",
        proof: "Aplicado em 150+ clínicas."
      },
      {
        question: "Isso vai parar minha rotina?",
        answer: "Não. Implantação é feita 'em paralelo', com rituais leves e acompanhamento semanal. Time segue atendendo normalmente.",
        proof: "Implementação sem interrupções."
      }
    ],
    equipe: [
      {
        question: "Minha equipe não tem experiência em vendas. Funciona?",
        answer: "Sim. Roteiros, treinamento prático e feedback semanal tornam o processo replicável. Redução de turnover e ganho de conversão em 90 dias.",
        proof: "Metodologia comprovada."
      },
      {
        question: "E se eu não tiver gestor comercial?",
        answer: "Estruturamos a liderança interna e a cadência de gestão. Você assume papel estratégico, sem competir com o time.",
        proof: "Liderança desenvolvida internamente."
      }
    ],
    tecnologia: [
      {
        question: "Preciso trocar tudo que uso hoje?",
        answer: "Não. Integramos o que já funciona e conectamos CRM, automações e dashboards. Foco é ver o número certo todos os dias.",
        proof: "Integração sem substituição."
      },
      {
        question: "Como acompanho os resultados?",
        answer: "Painéis com conversão, ticket, margem, ciclo e no-show. Decisão por fatos, não por impressão.",
        proof: "Dashboards em tempo real."
      }
    ],
    resultados: [
      {
        question: "Em quanto tempo vejo efeito?",
        answer: "Ritmo de 90 dias para sentir a mudança; 6 meses para previsibilidade. Cadência realista, sem promessas mágicas.",
        proof: "Timeline comprovada."
      },
      {
        question: "Quanto custa comparado ao que perco hoje?",
        answer: "A cada mês sem estrutura, você perde consultas que não viram procedimento. O investimento se paga ao transformar agenda em faturamento.",
        proof: "ROI comprovado."
      }
    ]
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respostas diretas sobre implementação e resultados
          </p>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-cta text-white shadow-cta"
                    : "bg-accent text-accent-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {faqData[activeCategory as keyof typeof faqData]?.map((faq, index) => (
                <Card key={index} className="border-accent/30 hover:border-secondary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {faq.answer}
                    </p>
                    <div className="text-sm text-secondary font-medium">
                      ✓ {faq.proof}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="border-secondary/30 bg-gradient-to-br from-secondary/10 to-secondary/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Ainda tem dúvidas?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Descubra seu potencial de conversão com nossa análise gratuita.
                  </p>
                  <Button variant="cta" className="w-full">
                    Quero Entender Meu Potencial de Conversão
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSectionNew;