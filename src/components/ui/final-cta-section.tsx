import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const FinalCtaSection = () => {
  return (
    <section className="py-20 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Posicionamento Competitivo:{" "}
            <span className="text-cta">Implementação Estratégica</span>{" "}
            vs Concorrência
          </h2>
          
          <div className="max-w-4xl mx-auto text-lg text-white/90 leading-relaxed space-y-4">
            <p>
              Análise de mercado indica que clínicas com gestão comercial estruturada têm{" "}
              <span className="text-cta font-bold">67% mais chance</span> de manter crescimento 
              sustentável em cenários competitivos.
            </p>
            
            <p className="text-xl font-semibold text-white">
              Questão estratégica não é SE implementar gestão comercial profissional.
            </p>
            
            <p>
              Questão é: sua clínica será{" "}
              <span className="text-success font-bold">early adopter</span>{" "}
              (vantagem competitiva de 18-24 meses) ou vai aguardar saturação do mercado regional para reagir?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Button variant="cta-pulse" size="lg" className="text-2xl py-8 px-12">
              IMPLEMENTAR GESTÃO COMERCIAL AGORA
            </Button>
          </div>
          
          <Card className="bg-card/95 backdrop-blur">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-secondary">
                Formulário Executivo
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome-gestor">Nome Completo (Gestor/Sócio) *</Label>
                    <Input 
                      id="nome-gestor" 
                      type="text" 
                      placeholder="Nome do gestor/sócio" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone-corporativo">Telefone Corporativo *</Label>
                    <Input 
                      id="telefone-corporativo" 
                      type="tel" 
                      placeholder="(31) 3333-4444" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-corporativo">Email Corporativo *</Label>
                  <Input 
                    id="email-corporativo" 
                    type="email" 
                    placeholder="contato@clinica.com.br" 
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="razao-social">Razão Social *</Label>
                    <Input 
                      id="razao-social" 
                      type="text" 
                      placeholder="Razão social da empresa" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input 
                      id="cnpj" 
                      type="text" 
                      placeholder="00.000.000/0001-00" 
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Volume Mensal de Avaliações *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-100">50-100 avaliações/mês</SelectItem>
                        <SelectItem value="100-200">100-200 avaliações/mês</SelectItem>
                        <SelectItem value="200-300">200-300 avaliações/mês</SelectItem>
                        <SelectItem value="300+">Mais de 300 avaliações/mês</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Faturamento Anual Estimado *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a faixa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3M">R$ 1-3 milhões</SelectItem>
                        <SelectItem value="3-7M">R$ 3-7 milhões</SelectItem>
                        <SelectItem value="7-15M">R$ 7-15 milhões</SelectItem>
                        <SelectItem value="15M+">Mais de R$ 15 milhões</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button variant="cta" className="w-full text-lg py-6" size="lg">
                  IMPLEMENTAR SISTEMA LOBOH AGORA
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar você autoriza contato comercial da Loboh para apresentação executiva.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;