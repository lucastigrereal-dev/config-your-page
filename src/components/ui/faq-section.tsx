import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Não tenho tempo para aprender vendas",
      answer: "Por isso nossa equipe faz PARA você. Você não aprende, você RECEBE pronto. Nossa metodologia é implementada pela nossa equipe especializada, você só precisa aplicar os processos que já chegam estruturados e testados."
    },
    {
      question: "Vendas é coisa de vendedor, não de médico",
      answer: "Medicina salvou sua vida. Vendas vai salvar sua aposentadoria. Como médico, você já vende confiança e resultados todos os dias. Nós apenas estruturamos isso em um sistema profissional que multiplica seus resultados."
    },
    {
      question: "Já tentei e não funcionou",
      answer: "Consultores genéricos prometem. Loboh entrega. 89% dos clientes recomendam. A diferença está na nossa especialização exclusiva em clínicas de estética. Conhecemos os desafios específicos do seu mercado."
    },
    {
      question: "Muito caro para minha realidade",
      answer: "Um mês sem Loboh custa R$120k em conversões perdidas. Um ano com Loboh custa menos que isso. O investimento se paga nos primeiros 30 dias com o aumento da conversão. É investimento, não gasto."
    }
  ];

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Esclarecemos as principais dúvidas sobre nossa consultoria
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-gradient-subtle"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;