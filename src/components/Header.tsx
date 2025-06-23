
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-caerre-primary via-caerre-secondary to-caerre-accent flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="mb-12">
          <Logo className="w-64 mx-auto mb-8" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas mb-8 leading-tight text-white">
          <span className="font-pacifico text-4xl md:text-5xl lg:text-6xl block mb-4">Você empreende.</span>
          <span className="text-caerre-light">A gente impulsiona.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-caerre-light mb-12 max-w-3xl mx-auto leading-relaxed font-ubuntu">
          Consultoria criativa, conteúdo autoral e educação prática em marketing, 
          inteligência artificial e comunicação — pra quem quer crescer com 
          <span className="font-semibold text-white"> clareza, estratégia e autenticidade</span>.
        </p>
        
        <Button 
          className="bg-white hover:bg-gray-100 text-caerre-primary font-medium py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg group border-2 border-white"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Quero alavancar meu negócio
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Header;
