import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Santos",
      age: 32,
      treatment: "Harmonização Facial",
      rating: 5,
      comment: "Resultado incrível! A Dra. foi muito cuidadosa e o resultado ficou super natural. Me sinto muito mais confiante agora.",
      image: "M.S"
    },
    {
      name: "Carla Oliveira", 
      age: 28,
      treatment: "Preenchimento Labial",
      rating: 5,
      comment: "Profissionais extremamente qualificados. O ambiente é acolhedor e o atendimento personalizado fez toda a diferença.",
      image: "C.O"
    },
    {
      name: "Ana Paula",
      age: 35,
      treatment: "Tratamento Corporal",
      rating: 5,
      comment: "Tecnologia de ponta e resultados que superam as expectativas. Recomendo a LOBOH para todas as minhas amigas!",
      image: "A.P"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            O Que Dizem Nossas Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação das nossas clientes é nossa maior conquista. 
            Conheça algumas histórias de transformação e autoestima renovada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="relative hover:shadow-glow transition-all duration-500 hover:-translate-y-1 bg-card border-border/30"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-gold fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.age} anos • {testimonial.treatment}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-muted-foreground">Satisfação Geral</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-muted-foreground">Procedimentos Realizados</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              5
            </div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-muted-foreground">Clientes Retornam</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;