import { Card, CardContent } from "@/components/ui/card";
import { Target, Smartphone, GraduationCap, Zap } from "lucide-react";

const MethodologySection = () => {
  const pillars = [
    {
      icon: Target,
      title: "ESTRATÉGIA",
      items: [
        "ICP Perfeito para Estética",
        "Métricas que importam",
        "Precificação psicológica"
      ]
    },
    {
      icon: Smartphone,
      title: "TECNOLOGIA",
      items: [
        "CRM especializado em clínicas",
        "Automação WhatsApp + Follow-up",
        "Dashboard em tempo real"
      ]
    },
    {
      icon: GraduationCap,
      title: "CAPACITAÇÃO",
      items: [
        "Treinamento específico para estética",
        "Scripts de vendas consultivas",
        "Cultura de alta performance"
      ]
    },
    {
      icon: Zap,
      title: "GESTÃO ÁGIL",
      items: [
        "Sprints semanais de melhoria",
        "Rituais de gestão estruturados",
        "Melhoria contínua baseada em dados"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Sistema Loboh Sales Agile para Estética
          </h2>
          <p className="text-xl text-muted-foreground">
            4 Pilares que Dobram Conversão
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
      </div>
    </section>
  );
};

export default MethodologySection;