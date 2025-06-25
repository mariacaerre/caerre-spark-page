import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

        <div className="max-w-5xl mx-auto">
          <TooltipProvider>
            <Accordion type="multiple" className="w-full space-y-4">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-0">
                  <Card className="overflow-hidden border-2 border-gray-200 hover:border-caerre-primary/30 transition-all duration-300">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <AccordionTrigger className="px-8 py-6 hover:no-underline [&[data-state=open]>div]:bg-caerre-primary/5">
                          <div className="flex items-center space-x-6 text-left w-full">
                            <div className="w-16 h-16 bg-caerre-primary/5 rounded-full flex items-center justify-center text-3xl flex-shrink-0 border border-caerre-primary/10 transition-colors duration-300">
                              {service.emoji}
                            </div>
                            <h3 className="text-lg md:text-xl font-ubuntu text-gray-800 leading-relaxed">
                              {service.title}
                            </h3>
                          </div>
                        </AccordionTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>(Clique para ver como a gente pode ajudar)</p>
                      </TooltipContent>
                    </Tooltip>
                    <AccordionContent className="px-8 pb-6">
                      <div className="ml-22">
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
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </TooltipProvider>
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
