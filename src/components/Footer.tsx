
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="footer" className="py-16 md:py-20 px-4 md:px-6 bg-caerre-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 md:mb-8">
          <Logo className="w-40 md:w-48 mx-auto mb-6 md:mb-8" />
        </div>

        <div id="contact" className="flex flex-col items-center justify-center mb-6 md:mb-8">
          <div className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/50">
            <span className="text-2xl">📱</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white">
            Redes e contato
          </h2>
        </div>

        <div className="text-sm md:text-base lg:text-lg text-caerre-light mb-6 md:mb-8 space-y-3 md:space-y-4 max-w-3xl mx-auto leading-relaxed">
          <p>
            Está com dúvidas ou sentindo que precisa de ajuda, mas não sabe por onde começar?
          </p>
          <p>
            Escreve pra gente. Às vezes, uma conversa já clareia muita coisa.
          </p>
          <p className="font-medium">
            Pode ser o primeiro passo para transformar a sua comunicação — e o seu negócio — do jeitinho que você precisa.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
          <a 
            href="https://instagram.com/caerre.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 md:space-x-4 hover:text-caerre-accent transition-colors duration-300 group"
            aria-label="Visite nosso Instagram"
          >
            <Instagram className="h-5 md:h-6 w-5 md:w-6 text-caerre-accent group-hover:scale-110 transition-transform duration-300" />
            <span className="text-base md:text-lg font-ubuntu group-hover:underline">@caerre.co</span>
          </a>
          
          <a 
            href="mailto:contato@caerre.co" 
            className="flex items-center justify-center space-x-3 md:space-x-4 hover:text-caerre-accent transition-colors duration-300 group"
            aria-label="Envie um email para nós"
          >
            <Mail className="h-5 md:h-6 w-5 md:w-6 text-caerre-accent group-hover:scale-110 transition-transform duration-300" />
            <span className="text-base md:text-lg font-ubuntu group-hover:underline">contato@caerre.co</span>
          </a>
        </div>

        <Button className="bg-white hover:bg-gray-100 text-caerre-primary hover:text-caerre-primary font-medium py-4 md:py-6 px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg border-2 border-white w-full sm:w-auto">
          Vamos trocar uma ideia
        </Button>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-caerre-secondary/30">
          <p className="text-xs md:text-sm text-caerre-light font-ubuntu">
            © 2025 Caerre&Co. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
