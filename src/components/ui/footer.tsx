import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import lobohLogo from "@/assets/loboh-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-background">LOBÔH</span>
            </div>
            <h3 className="font-semibold text-background mb-3">Sobre a Lobôh:</h3>
            <p className="text-background/80 leading-relaxed max-w-md mb-4">
              Somos especialistas em clínicas. Implementamos processos, método, cultura e tecnologia para transformar consultas em procedimentos com previsibilidade e rentabilidade.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-background/80">
                <span>📞</span>
                <span>(31) 98855-2083</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <span>✉️</span>
                <span>contato@loboh.com.br</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <span>📍</span>
                <span>São Paulo • Belo Horizonte • Atendimento nacional</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">
              Links Úteis
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#methodology" className="text-background/80 hover:text-primary transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#cases" className="text-background/80 hover:text-primary transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-background/80 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/terms" className="text-background/80 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">
              Redes Sociais
            </h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-background/80 hover:text-primary transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 LOBÔH Consultoria de Vendas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-background/60 hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
                <a href="/terms" className="text-background/60 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;