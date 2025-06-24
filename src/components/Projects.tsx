
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, BookOpen, Search } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      emoji: "💡",
      title: "Caerre Lab",
      description: "Consultoria online, prática e estratégica, para te ajudar a posicionar melhor sua marca, comunicar com clareza e aumentar seus resultados.",
      buttonText: "Quero saber mais",
      bgColor: "bg-white",
      borderColor: "border-caerre-primary",
      titleGradient: "bg-gradient-to-r from-caerre-primary to-caerre-secondary bg-clip-text text-transparent"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      emoji: "📚", 
      title: "Caerre Escola",
      description: "Cursos rápidos e objetivos sobre marketing, inteligência artificial e empreendedorismo — pra aplicar no dia a dia e ver resultado de verdade.",
      buttonText: "Quero aprender",
      bgColor: "bg-white",
      borderColor: "border-caerre-secondary",
      titleGradient: "bg-gradient-to-r from-caerre-secondary to-caerre-accent bg-clip-text text-transparent"
    },
    {
      icon: <Search className="h-8 w-8" />,
      emoji: "🔍",
      title: "Caerreverso", 
      description: "Textos e conteúdos autorais sobre criatividade, estilo de vida e propósito — pra inspirar o lado mais humano de quem empreende.",
      buttonText: "Quero ler",
      bgColor: "bg-white",
      borderColor: "border-caerre-accent",
      titleGradient: "bg-gradient-to-r from-caerre-accent to-caerre-primary bg-clip-text text-transparent"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-accent rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl font-bold">🚀</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Nossos projetos
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-ubuntu">
            Aqui, trabalhamos com <span className="font-semibold text-caerre-accent">3 soluções</span> para te ajudar a impulsionar seu negócio com 
            <span className="font-semibold text-caerre-accent font-pacifico"> estratégia, propósito e presença</span>:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${project.bgColor} border-3 ${project.borderColor} hover:border-opacity-70 shadow-lg`}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{project.emoji}</div>
                <h3 className={`text-2xl font-bebas ${project.titleGradient} mb-4`}>
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-ubuntu">
                  {project.description}
                </p>
                <Button className="bg-caerre-primary hover:bg-caerre-secondary text-white font-medium py-3 px-8 rounded-full transition-all duration-300 group w-full shadow-md hover:shadow-lg">
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
