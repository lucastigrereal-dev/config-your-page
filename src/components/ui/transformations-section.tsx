import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, TrendingUp, Users, BarChart3, Eye, Crown, DollarSign, Focus, Clock, Zap } from "lucide-react";

const TransformationsSection = () => {
  const mainTransformations = [
    {
      icon: Target,
      title: "Menos Consultas, Mais Procedimentos",
      description: "Com nosso estudo de ICP, você vai parar de atender leads de baixo valor e vai focar apenas em consultas que realmente viram procedimentos.",
      details: "A agenda vai deixar de ser ocupada por curiosos e vai passar a ser preenchida por pacientes com perfil cirúrgico, dispostos a pagar o valor certo pelo seu serviço."
    },
    {
      icon: TrendingUp,
      title: "Metas Batidas com Consistência e Previsibilidade",
      description: "Você vai bater metas todos os meses.",
      details: "KPIs claros e rituais semanais de acompanhamento vão transformar cada meta em degrau conquistado. Nada de correr atrás no fim do mês: você vai ver o número sendo construído semana a semana."
    },
    {
      icon: Users,
      title: "Equipe Motivadíssima e de Alta Performance",
      description: "Imagine ter uma equipe extremamente motivada, autoresponsável e de alta performance.",
      details: "Os ciclos de rotatividade vão acabar. Sua equipe vai se sentir parte do crescimento e vai operar com energia, foco e clareza para transformar consultas em procedimentos."
    }
  ];

  const additionalTransformations = [
    {
      icon: BarChart3,
      title: "A Verdade sobre Seus Números",
      content: "Você terá nas mãos indicadores que contam a verdade: conversão, ciclo, margem e satisfação. Nada de olhar só para o faturamento final."
    },
    {
      icon: Eye,
      title: "É a Visão e Missão do Dono em Cada Processo",
      content: "Processos estudados e validados tornam os resultados previsíveis. Playbooks, scripts e critérios alinham todo o time."
    },
    {
      icon: Crown,
      title: "Liderança Comercial Preparada para o Futuro",
      content: "A gestão comercial se torna autogerenciável, e você assume o papel de estrategista com líderes internos preparados."
    },
    {
      icon: DollarSign,
      title: "Remuneração Justa que Impulsiona Vendas",
      content: "Um plano de carreira que retém talentos e premia resultados certos, alinhado ao lucro da clínica."
    },
    {
      icon: Focus,
      title: "Foco no que Realmente Gera Lucro",
      content: "Automação e divisão de tarefas para que o time use o tempo vendendo, não preenchendo planilhas."
    },
    {
      icon: Clock,
      title: "Estratégia que Libera Seu Tempo para Inovar",
      content: "Automação e rituais estratégicos liberam espaço na agenda do dono para inovação e crescimento."
    },
    {
      icon: Zap,
      title: "Alinhamento Total entre Marketing, Vendas e Pós-Venda",
      content: "Um único fluxo onde todas as áreas trabalham integradas, garantindo experiência impecável ao paciente."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main 3 Transformations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {mainTransformations.map((transformation, index) => {
            const Icon = transformation.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-accent/50 hover:border-secondary/50 bg-gradient-to-br from-background to-accent/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-cta rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {transformation.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {transformation.description}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {transformation.details}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Micro CTA */}
        <div className="text-center mb-16">
          <Button variant="cta" size="lg" className="text-lg px-8 py-4">
            Quero Essas 3 Transformações
          </Button>
        </div>

        {/* Additional Transformations - Accordion */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Outras Transformações que Você Vai Experimentar
          </h3>
          
          <Accordion type="single" collapsible className="space-y-4">
            {additionalTransformations.map((item, index) => {
              const Icon = item.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-accent/30 rounded-lg px-6 bg-gradient-to-r from-background to-accent/10 hover:border-secondary/50 transition-colors"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <span className="text-lg font-semibold text-left">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2 pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Button variant="primary" size="lg" className="text-lg px-8 py-4">
            Quero Implementar o Sistema na Minha Clínica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;