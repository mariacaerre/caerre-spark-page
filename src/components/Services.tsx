
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Services = () => {
  const services = [
    {
      emoji: "✏️",
      title: "Criação e Otimização de Conteúdo",
      subtitle: "Pra quem quer se comunicar com consistência e conexão, mas trava na hora de escrever.",
      items: [
        "Textos estratégicos para redes sociais, blogs, sites e newsletters",
        "Copywriting, storytelling e SEO para atrair as pessoas certas",
        "Roteiros para vídeos, aulas e lançamentos"
      ]
    },
    {
      emoji: "💌",
      title: "CRM e Automação de Marketing",
      subtitle: "Pra quem quer cuidar bem dos contatos e criar vínculo real com o público.",
      items: [
        "Criação de jornadas de relacionamento personalizadas",
        "Segmentação inteligente de audiência e automações sob medida",
        "Estratégias de nutrição e fidelização com foco em conexão"
      ]
    },
    {
      emoji: "📈",
      title: "Planejamento Estratégico",
      subtitle: "Pra quem busca clareza na comunicação e direção nos próximos passos.",
      items: [
        "Diagnóstico de marca e comunicação",
        "Posicionamento digital e planejamento de conteúdo",
        "Mentorias individuais para tirar ideias do papel e alinhar estratégias"
      ]
    },
    {
      emoji: "🤖",
      title: "Inteligência Artificial aplicada ao marketing",
      subtitle: "Pra quem quer usar a tecnologia a favor da rotina — sem complicar.",
      items: [
        "Ensino prático de IA para criação de conteúdo e automações",
        "Curadoria de ferramentas úteis para o dia a dia",
        "Estratégias que economizam tempo e otimizam resultados"
      ]
    },
    {
      emoji: "🎯",
      title: "Tráfego Pago e Campanhas",
      subtitle: "Pra quem quer ampliar o alcance e conquistar mais clientes com estratégia.",
      items: [
        "Gestão de campanhas no Google Ads e Meta Ads",
        "Criação de páginas de captura e jornadas que incentivam a ação",
        "Integração com ferramentas de CRM e e-mail marketing"
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
              Se você tem um bom produto ou serviço, mas:
            </p>
            <div className="text-lg space-y-2">
              <p>– tem dificuldade para explicar com clareza o que faz,</p>
              <p>– sente que está falando para ninguém,</p>
              <p>– ou se perde em meio a ferramentas, termos e fórmulas...</p>
            </div>
            <p className="font-medium">
              Respira. É normal — e tem solução.
            </p>
            <p>
              A proposta aqui é simples: transformar sua comunicação em algo que funciona de verdade — com leveza, estratégia e respeito pelo seu momento, esteja você começando ou já em movimento.
            </p>
            <p>
              Nada de fórmulas prontas. Vamos olhar para a sua realidade e construir soluções sob medida, com foco em clareza, autonomia e crescimento sustentável.
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
                      <TooltipContent className="bg-caerre-primary text-white border-caerre-primary shadow-lg">
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
        </div>

        <div className="text-center mt-12">
          <Button className="bg-caerre-accent hover:bg-caerre-accent/90 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg">
            Vamos bater um papo
          </Button>
          <p className="text-gray-600 mt-4 text-lg">
            Pode ser o primeiro passo pra uma comunicação mais leve, eficiente e alinhada com a essência do seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
