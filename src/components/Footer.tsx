
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-caerre-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Logo className="w-48 mx-auto mb-8" />
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-caerre-accent/30">
            <span className="text-2xl">📱</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas text-white">
            Redes e contato
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-caerre-light mb-12 creative-text">
          Vamos conversar?
        </p>

        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-4">
            <Instagram className="h-6 w-6 text-caerre-accent" />
            <span className="text-lg font-ubuntu">@caerre.co</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <Mail className="h-6 w-6 text-caerre-accent" />
            <span className="text-lg font-ubuntu">contato@caerre.co</span>
          </div>
        </div>

        <Button className="bg-caerre-accent hover:bg-caerre-accent/90 text-white font-medium py-6 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg">
          Vamos conversar
        </Button>

        <div className="mt-16 pt-8 border-t border-caerre-secondary/30">
          <p className="text-caerre-light font-ubuntu">
            © 2024 Caerre&Co. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
