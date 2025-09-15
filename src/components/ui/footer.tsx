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
            <img 
              src={lobohLogo} 
              alt="LOBOH Logo" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-background/80 mb-6 leading-relaxed">
              A LOBOH é referência em tratamentos estéticos, combinando tecnologia 
              de ponta com atendimento humanizado para realçar sua beleza natural.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Tratamentos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/80 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>(11) 3333-4444</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>contato@loboh.com.br</span>
              </div>
              <div className="flex items-start text-background/80">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-primary" />
                <span>
                  Rua da Beleza, 123<br />
                  Jardins, São Paulo - SP
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 LOBOH Estética Avançada. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
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