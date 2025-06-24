
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Edit3, Mail, TrendingUp, Brain, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Edit3 className="h-8 w-8" />,
      emoji: "✏️",
      title: "Criação e Otimização de Conteúdo",
      items: [
        "Textos estratégicos para blogs, redes sociais, newsletters e sites",
        "Copywriting, storytelling e SEO com foco em atrair clientes certos",
        "Roteiros para vídeos, aulas e lançamentos"
      ]
    },
    {
      icon: <Mail className="h-8 w-8" />,
      emoji: "💌",
      title: "CRM e Automação de Marketing",
      items: [
        "Criação de jornadas de relacionamento personalizadas, com e-mails, fluxos e automações sob medida",
        "Segmentação inteligente de público e mensagens no tempo certo",
        "Estratégias de nutrição e fidelização de leads, com foco em conexão real e conversão"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      emoji: "📈",
      title: "Planejamento Estratégico e Mentorias",
      items: [
        "Diagnóstico de marca e comunicação",
        "Posicionamento digital e planejamento de conteúdo",
        "Mentorias 1:1 para destravar ideias e alinhar direção"
      ]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      emoji: "🤖",
      title: "Inteligência Artificial aplicada ao marketing",
      items: [
        "Ensino prático de IA para produção de conteúdo, geração de ideias e automações",
        "Curadoria de ferramentas úteis para facilitar sua rotina",
        "Estratégias para ganhar tempo e melhorar resultados com tecnologia"
      ]
    },
    {
      icon: <Target className="h-8 w-8" />,
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
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-secondary/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-caerre-secondary/30">
              <span className="text-2xl">🛠️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Como podemos te ajudar na prática
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-ubuntu mb-4">
            Aqui, mergulhamos na realidade do seu negócio para encontrar soluções que melhor funcionam para você, com foco em clareza, autonomia e crescimento.
          </p>
          <p className="text-xl text-gray-700 font-ubuntu font-semibold">
            Confira algumas das frentes em que podemos atuar:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-200 hover:border-caerre-primary/30"
            >
              <div className="w-16 h-16 bg-caerre-primary/10 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto border border-caerre-primary/20">
                {service.emoji}
              </div>
              <h3 className="text-xl font-bebas text-caerre-primary mb-4 text-center">
                {service.title}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-caerre-accent mr-2 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-caerre-primary hover:bg-caerre-secondary text-white font-medium py-4 px-8 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl text-lg">
            Vamos conversar
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
