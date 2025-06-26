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
    <section id="services" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-caerre-primary/3 via-transparent to-caerre-accent/3"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-caerre-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-caerre-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-primary/5 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-caerre-primary/10">
              <span className="text-2xl">🛠️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Como funciona na prática
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Primeira frase de impacto */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-caerre-primary/10 to-caerre-accent/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 border-gradient-to-r from-caerre-primary/20 to-caerre-accent/20 shadow-2xl">
                <p className="text-2xl md:text-3xl font-bebas text-caerre-primary mb-2 leading-tight">
                  Um bom produto ou serviço,
                </p>
                <p className="text-2xl md:text-3xl font-bebas text-caerre-accent leading-tight">
                  mas invisível para quem precisa.
                </p>
              </div>
            </div>

            {/* Texto explicativo com design mais criativo */}
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gradient-to-br from-caerre-primary/5 to-transparent rounded-2xl p-6 border-l-4 border-caerre-primary">
                <p className="text-lg leading-relaxed text-gray-700">
                  Se você tem dificuldade para explicar com clareza o que faz, sente que está falando para ninguém, se perde em meio a ferramentas, termos e fórmulas — 
                  <span className="font-semibold text-caerre-primary"> a Caerre&Co é para você.</span>
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-caerre-accent/5 to-transparent rounded-2xl p-6 border-l-4 border-caerre-accent">
                <p className="text-lg leading-relaxed text-gray-700">
                  A proposta aqui é simples: 
                  <span className="font-semibold text-caerre-accent"> transformar sua comunicação para gerar resultados de verdade.</span> 
                  Nada de fórmulas prontas. Apenas soluções sob medida para o seu negócio.
                </p>
              </div>
            </div>
            
            {/* "Se você..." com destaque especial */}
            <div className="text-center mt-12">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-caerre-primary to-caerre-accent rounded-full blur opacity-30"></div>
                <p className="relative bg-white px-8 py-4 rounded-full text-2xl font-bebas text-caerre-primary border-2 border-caerre-primary/20 shadow-lg">
                  Se você…
                </p>
              </div>
            </div>
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
                        <p>(Clique para descobrir o que podemos fazer)</p>
                      </TooltipContent>
                    </Tooltip>
                    <AccordionContent className="px-8 pb-6">
                      <div className="ml-22">
                        <p className="text-xl font-bebas text-caerre-primary mb-4">
                          {service.serviceTitle}
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
            Vem que te explicamos mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
