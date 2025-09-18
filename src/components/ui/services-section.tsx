import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Smartphone, GraduationCap, Zap } from "lucide-react";

const MethodologySection = () => {
  const pillars = [
    {
      icon: Target,
      title: "Estratégia Clínica Comercial",
      items: [
        "Definição do ICP cirúrgico e dos perfis ideais de paciente",
        "Instalação de métricas que realmente importam para a clínica",
        "Estrutura de precificação validada para aumentar margem e aceitação"
      ]
    },
    {
      icon: Smartphone,
      title: "Tecnologia Integrada",
      items: [
        "CRM desenvolvido para clínicas, fácil de usar no dia a dia",
        "Automação de WhatsApp e follow-up para reduzir no-show e aumentar retorno",
        "Dashboards em tempo real que mostram os números que sustentam decisões"
      ]
    },
    {
      icon: GraduationCap,
      title: "Capacitação da Equipe",
      items: [
        "Treinamentos práticos e contínuos adaptados à realidade clínica",
        "Scripts de atendimento e vendas consultivas prontos para uso",
        "Cultura de alta performance que motiva e reduz turnover"
      ]
    },
    {
      icon: Zap,
      title: "Gestão Ágil e Previsível",
      items: [
        "Sprints semanais para atacar gargalos rapidamente",
        "Rituais de gestão que mantêm foco e disciplina no time",
        "Ciclo de melhoria contínua com base em dados concretos"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sistema Lobôh Sales Agile para Clínicas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            4 Pilares que Transformam Consultas em Procedimentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-gradient-subtle border-primary/20"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-secondary">
                    PILAR {index + 1} - {pillar.title}
                  </h3>
                </div>

                <div>
                  <ul className="space-y-4">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <span className="text-foreground font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="cta-secondary" size="lg" className="text-lg px-8 py-4">
            Ver Como Implantamos em 90 Dias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;