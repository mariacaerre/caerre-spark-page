
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Services = () => {
  const services = [
    {
      emoji: "🎯",
      title: "Precisa conquistar mais clientes",
      serviceTitle: "Tráfego Pago e Campanhas",
      items: [
        "Gestão de campanhas no Google Ads e Meta Ads",
        "Criação de páginas de captura e jornadas que incentivam a ação",
        "Integração com ferramentas de CRM e e-mail marketing"
      ]
    },
    {
      emoji: "📈",
      title: "Não tem a menor ideia de por onde começar",
      serviceTitle: "Planejamento Estratégico",
      items: [
        "Diagnóstico de marca e comunicação",
        "Posicionamento digital e planejamento de conteúdo",
        "Mentorias individuais para tirar ideias do papel e alinhar estratégias"
      ]
    },
    {
      emoji: "💌",
      title: "Quer criar vínculo real com seus contatos",
      serviceTitle: "CRM e Automação de Marketing",
      items: [
        "Criação de jornadas de relacionamento personalizadas",
        "Segmentação inteligente de audiência e automações sob medida",
        "Estratégias de nutrição e fidelização com foco em conexão"
      ]
    },
    {
      emoji: "✏️",
      title: "Trava na hora de escrever, mas quer comunicar melhor",
      serviceTitle: "Criação e Otimização de Conteúdo",
      items: [
        "Textos estratégicos para redes sociais, blogs, sites e newsletters",
        "Copywriting, storytelling e SEO para atrair as pessoas certas",
        "Roteiros para vídeos, aulas e lançamentos"
      ]
    },
    {
      emoji: "🤖",
      title: "Acha IA legal, mas não sabe como usar na prática",
      serviceTitle: "Inteligência Artificial aplicada ao marketing",
      items: [
        "Ensino prático de IA para criação de conteúdo e automações",
        "Curadoria de ferramentas úteis para o dia a dia",
        "Estratégias que economizam tempo e otimizam resultados"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
            <div className="w-12 h-12 bg-caerre-primary/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🛠️</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-caerre-primary text-center">
              Como funciona na prática
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto mb-6 md:mb-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border border-gray-200">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-4 md:mb-6">
                <span className="font-semibold text-caerre-primary">Um bom produto ou serviço, mas invisível para quem precisa.</span>
              </p>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 mb-4 md:mb-6">
                Se você tem dificuldade para explicar com clareza o que faz, sente que está falando para ninguém, se perde em meio a ferramentas, termos e fórmulas — <span className="font-semibold text-caerre-primary">a Caerre&Co é para você.</span>
              </p>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
                A proposta aqui é simples: <span className="font-semibold text-caerre-accent">transformar sua comunicação para gerar resultados de verdade.</span> Nada de fórmulas prontas. Apenas soluções sob medida para o seu negócio.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-gray-200">
            <div className="text-left mb-6 md:mb-8">
              <p className="text-xl md:text-2xl font-bebas text-caerre-primary">
                Se você…
              </p>
            </div>

            <TooltipProvider>
              <Accordion type="multiple" className="w-full space-y-3 md:space-y-4">
                {services.map((service, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-0">
                    <Card className="overflow-hidden border-2 border-gray-200 hover:border-caerre-primary/30 transition-all duration-300 bg-white">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <AccordionTrigger className="px-4 md:px-6 lg:px-8 py-4 md:py-6 hover:no-underline [&[data-state=open]>div]:bg-caerre-primary/5">
                            <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 text-left w-full">
                              <div className="w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 bg-caerre-primary/5 rounded-full flex items-center justify-center text-xl md:text-2xl lg:text-3xl flex-shrink-0 border border-caerre-primary/10 transition-colors duration-300">
                                {service.emoji}
                              </div>
                              <h3 className="text-sm md:text-base lg:text-lg xl:text-xl font-ubuntu text-gray-800 leading-tight md:leading-relaxed">
                                {service.title}
                              </h3>
                            </div>
                          </AccordionTrigger>
                        </TooltipTrigger>
                        <TooltipContent className="bg-caerre-primary text-white border-caerre-primary shadow-lg">
                          <p>(Clique para descobrir o que podemos fazer)</p>
                        </TooltipContent>
                      </Tooltip>
                      <AccordionContent className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6">
                        <div className="ml-13 md:ml-16 lg:ml-22">
                          <p className="text-base md:text-lg lg:text-xl font-bebas text-caerre-primary mb-3 md:mb-4">
                            {service.serviceTitle}
                          </p>
                          <ul className="space-y-2 md:space-y-3">
                            {service.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start text-xs md:text-sm lg:text-base">
                                <span className="text-caerre-accent mr-2 font-bold">–</span>
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

            <div className="text-center mt-8 md:mt-12">
              <Button className="bg-caerre-accent hover:bg-caerre-accent/90 text-white font-medium py-4 md:py-6 px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg w-full sm:w-auto">
                Vem que te explicamos mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
