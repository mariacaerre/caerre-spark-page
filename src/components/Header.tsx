
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <section id="header" className="min-h-screen bg-gradient-to-br from-caerre-primary via-caerre-secondary to-caerre-accent flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="mb-12">
          <Logo className="w-64 mx-auto mb-8" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas mb-8 leading-tight text-white">
          <span className="text-caerre-light">Será que o seu cliente te vê do jeito certo?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-caerre-light mb-12 max-w-3xl mx-auto leading-relaxed font-ubuntu">
          Ajudamos negócios e marcas pessoais a se comunicarem com 
          <span className="font-semibold text-white"> clareza, estratégia e sensibilidade</span> — 
          esteja você começando agora ou se preparando para novos desafios.
        </p>
        
        <Button 
          className="bg-white hover:bg-gray-100 text-caerre-primary font-medium py-4 md:py-6 px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg group border-2 border-white w-full sm:w-auto"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Tenho interesse
          <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Header;
