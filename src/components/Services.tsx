
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      emoji: "😵‍💫",
      title: "Quando a sua comunicação não conecta ou falta estratégia de conteúdo...",
      subtitle: "A gente te ajuda com:",
      items: [
        "Textos estratégicos para blogs, redes sociais, newsletters e sites",
        "Copywriting, storytelling e SEO com foco em atrair as pessoas certas",
        "Roteiros para vídeos, aulas e lançamentos",
        "Planejamento de conteúdo com intenção, identidade e direção"
      ]
    },
    {
      emoji: "⏰",
      title: "Quando falta tempo ou clareza pra organizar o marketing do seu negócio...",
      subtitle: "A gente te ajuda com:",
      items: [
        "Criação de jornadas de relacionamento personalizadas",
        "Segmentação inteligente de público e automações sob medida",
        "Estratégias de nutrição e fidelização de leads com foco em conexão real",
        "Otimização de processos com ferramentas simples e eficazes"
      ]
    },
    {
      emoji: "🤖",
      title: "Quando você quer usar inteligência artificial, mas não sabe por onde começar...",
      subtitle: "A gente te ajuda com:",
      items: [
        "Ensino prático de IA aplicada à comunicação e ao marketing",
        "Curadoria de ferramentas que realmente facilitam sua rotina",
        "Estratégias pra ganhar tempo, destravar ideias e manter a criatividade"
      ]
    },
    {
      emoji: "📣",
      title: "Quando você quer atrair mais clientes, mas sem apelar ou se perder no meio do caminho...",
      subtitle: "A gente te ajuda com:",
      items: [
        "Gestão de campanhas no Google Ads e Meta Ads",
        "Criação de páginas de captura e jornadas que incentivam a ação do público",
        "Integração entre tráfego pago, CRM e e-mail marketing",
        "Direcionamento estratégico para crescer com consistência e verdade"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-primary/5 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-caerre-primary/10">
              <span className="text-2xl">🛠️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Como funciona na prática
            </h2>
          </div>
          
          <div className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto font-ubuntu space-y-4">
            <p>
              Empreender com propósito é bonito — mas também pode ser solitário, confuso e cansativo.
            </p>
            <p>
              Na Caerre&Co, a gente mergulha na realidade do seu negócio pra te ajudar a descomplicar o que trava e impulsionar o que importa.
            </p>
            <p className="font-medium">
              Aqui estão alguns caminhos em que podemos te apoiar:
            </p>
          </div>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-200 hover:border-caerre-primary/30">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-caerre-primary/5 rounded-full flex items-center justify-center text-3xl flex-shrink-0 border border-caerre-primary/10">
                  {service.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-ubuntu text-gray-800 mb-4 leading-relaxed">
                    {service.title}
                  </h3>
                  <p className="text-lg font-bebas text-caerre-primary mb-4">
                    {service.subtitle}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-caerre-accent mr-2 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-caerre-accent hover:bg-caerre-accent/90 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Vamos conversar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
