
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, BookOpen, Search } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      emoji: "💡",
      title: "Caerre Lab",
      description: "Consultoria online, prática e estratégica, pra te ajudar a posicionar melhor sua marca, comunicar com clareza e aumentar seus resultados.",
      buttonText: "Quero saber mais",
      gradient: "from-caerre-light to-white"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      emoji: "📚",
      title: "Caerre Escola",
      description: "Cursos rápidos e objetivos sobre marketing, inteligência artificial e empreendedorismo — pra aplicar no dia a dia e ver resultado de verdade.",
      buttonText: "Ver cursos",
      gradient: "from-purple-100 to-caerre-light"
    },
    {
      icon: <Search className="h-8 w-8" />,
      emoji: "🔍",
      title: "Caerreverso",
      description: "Textos e conteúdos autorais sobre criatividade, estilo de vida e propósito — pra inspirar o lado mais humano de quem empreende.",
      buttonText: "Ler textos",
      gradient: "from-caerre-secondary/20 to-caerre-light"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-accent rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl font-bold">🧩</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Nossos projetos
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-ubuntu">
            Três formas de te ajudar a fazer seu negócio crescer com mais 
            <span className="font-semibold text-caerre-accent creative-text"> intenção e resultado</span>:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br ${project.gradient} border-0`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{project.emoji}</div>
                <h3 className="text-2xl font-bebas text-caerre-primary mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-ubuntu">
                  {project.description}
                </p>
                <Button className="border-2 border-caerre-accent text-caerre-accent hover:bg-caerre-accent hover:text-white font-medium py-3 px-8 rounded-full transition-all duration-300 group w-full">
                  {project.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
