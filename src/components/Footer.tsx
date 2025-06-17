
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-accent rounded-full flex items-center justify-center mr-4">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-caerre-primary">
            Redes e contato
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          Vamos conversar?
        </p>

        <div className="space-y-6 mb-12">
          <div className="flex items-center justify-center space-x-4">
            <Instagram className="h-6 w-6 text-caerre-primary" />
            <span className="text-lg">@caerre.co</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <Mail className="h-6 w-6 text-caerre-primary" />
            <span className="text-lg">contato@caerre.co</span>
          </div>
        </div>

        <Button className="btn-primary text-lg">
          Quero conversar
        </Button>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            © 2024 Caerre&Co. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
