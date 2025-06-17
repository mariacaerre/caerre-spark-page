
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-caerre-cream via-white to-caerre-cream flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="gradient-text">Você tem potencial.</span>
          <br />
          <span className="text-caerre-primary">O seu negócio também.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Consultoria criativa, conteúdo autoral e educação prática em marketing, 
          inteligência artificial e comunicação — pra quem quer crescer com 
          <span className="font-semibold text-caerre-accent"> clareza, estratégia e autenticidade</span>.
        </p>
        
        <Button 
          className="btn-primary text-lg group"
          onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero alavancar meus resultados
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Header;
