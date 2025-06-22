
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-caerre-light via-white to-caerre-light flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="mb-12">
          <Logo className="w-64 mx-auto mb-8" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas mb-8 leading-tight">
          <span className="gradient-text">Você tem potencial.</span>
          <br />
          <span className="text-caerre-primary">O seu negócio também.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-ubuntu">
          Consultoria criativa, conteúdo autoral e educação prática em marketing, 
          inteligência artificial e comunicação — pra quem quer crescer com 
          <span className="font-semibold text-caerre-accent creative-text"> clareza, estratégia e autenticidade</span>.
        </p>
        
        <Button 
          className="bg-caerre-accent hover:bg-caerre-accent/90 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg group"
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
