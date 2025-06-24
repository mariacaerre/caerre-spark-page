
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      emoji: "✏️",
      title: "Criação e Otimização de Conteúdo",
      items: [
        "Textos estratégicos para blogs, redes sociais, newsletters e sites",
        "Copywriting, storytelling e SEO com foco em atrair clientes certos",
        "Roteiros para vídeos, aulas e lançamentos"
      ]
    },
    {
      emoji: "💌",
      title: "CRM e Automação de Marketing",
      items: [
        "Criação de jornadas de relacionamento personalizadas",
        "Segmentação inteligente de público e automações sob medida",
        "Estratégias de nutrição e fidelização de leads com foco em conexão real"
      ]
    },
    {
      emoji: "📈",
      title: "Planejamento Estratégico e Mentorias",
      items: [
        "Diagnóstico de marca e comunicação",
        "Posicionamento digital e planejamento de conteúdo",
        "Mentorias 1:1 para destravar ideias e alinhar direção"
      ]
    },
    {
      emoji: "🤖",
      title: "Inteligência Artificial aplicada ao marketing",
      items: [
        "Ensino prático de IA para produção de conteúdo, geração de ideias e automações",
        "Curadoria de ferramentas úteis para facilitar sua rotina",
        "Estratégias para ganhar tempo e melhorar resultados com tecnologia"
      ]
    },
    {
      emoji: "🎯",
      title: "Tráfego Pago e Campanhas",
      items: [
        "Gestão de campanhas no Google Ads e Meta Ads",
        "Criação de páginas de captura e jornadas que incentivam a ação do público",
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
              Como podemos te ajudar na prática
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto font-ubuntu">
            Aqui, mergulhamos na realidade do seu negócio para encontrar soluções que melhor funcionam para você, com foco em clareza, autonomia e crescimento. Confira algumas das frentes em que podemos atuar:
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-200 hover:border-caerre-primary/30">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-caerre-primary/5 rounded-full flex items-center justify-center text-3xl flex-shrink-0 border border-caerre-primary/10">
                  {service.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bebas text-caerre-primary mb-4">
                    {service.title}
                  </h3>
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
