import { TrendingUp, DollarSign, Target, AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  const marketData = [
    {
      icon: TrendingUp,
      number: "+15%",
      label: "Crescimento 2024: ao ano"
    },
    {
      icon: DollarSign,
      number: "R$ 47,5bi",
      label: "Mercado atual"
    },
    {
      icon: Target,
      number: "R$ 54,6bi",
      label: "Projeção 2025"
    },
    {
      icon: AlertTriangle,
      number: "+12%",
      label: "Concorrência: novas clínicas/ano"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            O Mercado de Estética Não Espera:{" "}
            <span className="text-cta">Aja Agora ou Seja Ultrapassado</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {marketData.map((data, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <data.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold text-cta mb-2">
                {data.number}
              </div>
              <div className="text-white/80">
                {data.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Enquanto você hesita, suas concorrentes estão implementando sistemas profissionais de vendas.{" "}
            <span className="text-cta font-bold">Em 6 meses, a diferença será irreversível.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;