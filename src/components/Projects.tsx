
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      emoji: "💡",
      title: "Caerre Lab",
      description: "Consultoria online personalizada, prática e estratégica. Para posicionar sua marca, comunicar com clareza e aumentar seus resultados.",
      buttonText: "Quero ajuda personalizada"
    },
    {
      emoji: "📚",
      title: "Caerre Escola",
      description: "Cursos rápidos e objetivos sobre marketing, IA e empreendedorismo. Conteúdo direto ao ponto, para aplicar no dia a dia e ver resultados de verdade.",
      buttonText: "Quero aprender com autonomia"
    },
    {
      emoji: "🔍",
      title: "Caerreverso",
      description: "Textos e conteúdos autorais sobre criatividade, estilo de vida e propósito. Inspiração para o lado mais humano de quem empreende.",
      buttonText: "Quero refletir e me inspirar"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-accent/5 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-caerre-accent/10">
              <span className="text-2xl">🚀</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Nossos projetos
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-ubuntu">
            Temos três caminhos para fortalecer sua marca com mais presença, propósito e direção:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-white border-2 border-gray-200 hover:border-caerre-primary/30">
              <div className="w-20 h-20 bg-caerre-primary/5 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto border border-caerre-primary/10">
                {project.emoji}
              </div>
              <h3 className="text-2xl font-bebas text-caerre-primary mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <Button className="bg-caerre-accent hover:bg-caerre-accent/90 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 group">
                {project.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
