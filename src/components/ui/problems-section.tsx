import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, AlertTriangle, Users } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "CONVERSÃO BAIXA",
      current: "Taxa atual: 15%",
      benchmark: "Benchmark: 35%",
      loss: "Perda mensal: R$120.000",
      description: "Clínica média converte apenas 15% das consultas em procedimentos. Isso significa que de cada 100 pessoas que entram na sua clínica interessadas, 85 saem sem comprar nada.",
      color: "text-cta"
    },
    {
      icon: AlertTriangle,
      title: "FUNIL QUEBRADO",
      current: "Follow-up: 25% fazem",
      benchmark: "Benchmark: 65%",
      loss: "Perda anual: R$480.000",
      description: "75% das clínicas não fazem follow-up estruturado. O paciente sai da consulta, você nunca mais ouve falar dele.",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "TIME DESTREINADO",
      current: "Time treinado: 30%",
      benchmark: "Benchmark: 85%",
      loss: "Custo anual: R$300.000",
      description: "Médicos viram atendentes. Atendentes viram vendedores. Resultado: ninguém sabe vender.",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Se Sua Clínica Faz Mais de{" "}
            <span className="text-cta">50 Consultas/Mês</span>,{" "}
            Você Está Perdendo Dinheiro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card/90 backdrop-blur border-border/50"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    index === 0 ? 'bg-cta/10' : index === 1 ? 'bg-orange-100' : 'bg-yellow-100'
                  }`}>
                    <problem.icon className={`h-8 w-8 ${problem.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">
                    {problem.title}
                  </h3>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">📊</span>
                    <span className="text-sm font-medium">{problem.current}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">📈</span>
                    <span className="text-sm font-medium text-success">{problem.benchmark}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">💸</span>
                    <span className="text-sm font-bold text-cta">{problem.loss}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;