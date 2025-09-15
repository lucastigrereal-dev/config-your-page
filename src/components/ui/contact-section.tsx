import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Fale Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende sua consulta personalizada e descubra como podemos 
            realçar sua beleza natural com segurança e excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Agendar Consulta
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Nome Completo
                    </label>
                    <Input 
                      placeholder="Seu nome completo" 
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Telefone
                    </label>
                    <Input 
                      placeholder="(11) 99999-9999" 
                      className="border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    E-mail
                  </label>
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Tratamento de Interesse
                  </label>
                  <select className="w-full p-3 rounded-md border border-border/50 bg-background text-foreground focus:border-primary transition-colors">
                    <option>Selecione o tratamento</option>
                    <option>Harmonização Facial</option>
                    <option>Preenchimento Labial</option>
                    <option>Tratamentos Corporais</option>
                    <option>Skincare</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Conte-nos um pouco sobre seus objetivos e expectativas..."
                    className="min-h-[120px] border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Enviar Solicitação
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Responderemos em até 24 horas úteis
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="hover:shadow-soft transition-shadow duration-300 bg-card/80 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Informações de Contato
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">(11) 3333-4444</div>
                      <div className="text-sm text-muted-foreground">WhatsApp e Ligações</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">contato@loboh.com.br</div>
                      <div className="text-sm text-muted-foreground">E-mail principal</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Rua da Beleza, 123</div>
                      <div className="text-sm text-muted-foreground">
                        Jardins, São Paulo - SP<br />
                        CEP: 01234-567
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Seg - Sex: 9h às 19h</div>
                      <div className="text-sm text-muted-foreground">Sáb: 9h às 17h</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Quick Actions */}
            <Card className="hover:shadow-soft transition-shadow duration-300 bg-card/80 backdrop-blur border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Siga-nos nas Redes Sociais
                </h3>
                
                <div className="flex gap-4 mb-6">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </div>

                <Button variant="whatsapp" className="w-full mb-4">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar via WhatsApp
                </Button>

                <Button variant="outline" className="w-full">
                  Ver Localização no Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;