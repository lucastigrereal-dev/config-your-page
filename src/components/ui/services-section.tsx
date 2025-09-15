import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Zap, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Harmonização Facial",
      description: "Realce natural dos contornos faciais com ácido hialurônico e bioestimuladores de colágeno.",
      features: ["Preenchimento labial", "Contorno mandibular", "Rejuvenescimento"],
      price: "A partir de R$ 800"
    },
    {
      icon: Heart,
      title: "Tratamentos Corporais",
      description: "Procedimentos não invasivos para modelagem e rejuvenescimento corporal.",
      features: ["Criolipólise", "Radiofrequência", "Drenagem linfática"],
      price: "A partir de R$ 600"
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para resultados superiores e maior conforto.",
      features: ["Laser fracionado", "Ultrassom microfocado", "LED terapia"],
      price: "A partir de R$ 500"
    },
    {
      icon: Shield,
      title: "Cuidados Preventivos",
      description: "Protocolos personalizados para manter e prolongar os resultados dos tratamentos.",
      features: ["Skincare personalizado", "Acompanhamento", "Orientação especializada"],
      price: "A partir de R$ 300"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Tratamentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa gama completa de procedimentos estéticos, 
            desenvolvidos para realçar sua beleza natural com segurança e excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur border-border/50"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <div className="text-primary font-semibold mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Agendar Avaliação Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;