import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-aesthetic-clinic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="LOBOH Aesthetic Clinic - Modern spa treatment room"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-glow rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent-rose/30 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent-gold/40 rounded-full animate-glow-pulse"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Meta Batida. Equipe de Alta Performance.
              </span>
              <br />
              <span className="bg-gradient-rose bg-clip-text text-transparent">
                Consultas que Viram Procedimentos.
              </span>
            </h1>
            
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                Da Agenda Cheia ao Caixa Cheio
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
                Somos especialistas em clínicas e sabemos exatamente onde agir. Não é curso: é a integração de processos, método, cultura e tecnologia para converter agenda em faturamento real.
              </p>
            </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="group">
              Quero Bater Minhas Metas
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="outline-hero" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Diagnóstico Gratuito
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 mt-12 text-white/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Resultados</div>
              <div className="text-sm">Reais</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm">de Satisfação</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">Método</div>
              <div className="text-sm">Comprovado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;