
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "Sucesso!",
        description: "Você foi inscrito na nossa newsletter. Obrigado!",
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-caerre-primary to-caerre-secondary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-gold rounded-full flex items-center justify-center mr-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Newsletter / Comunidade
          </h2>
        </div>

        <p className="text-xl md:text-2xl mb-8">
          Receba conteúdos que realmente fazem diferença.
        </p>

        <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
          <p className="text-lg mb-6">
            Assine a newsletter da Caerre&Co e receba, uma vez por mês:
          </p>
          
          <ul className="text-left space-y-2 mb-8 text-gray-200">
            <li>– Dicas de ferramentas</li>
            <li>– Textos autorais</li>
            <li>– Novidades e convites para oficinas e vivências</li>
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="📝 Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/90 text-gray-900 placeholder:text-gray-600"
              required
            />
            <Input
              type="email"
              placeholder="📧 E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/90 text-gray-900 placeholder:text-gray-600"
              required
            />
            <Button 
              type="submit" 
              className="bg-caerre-gold hover:bg-caerre-gold/90 text-caerre-primary font-semibold w-full py-3 group"
            >
              Assinar newsletter
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-gray-300 mt-4">
            📬 Envio mensal, sem spam. Só o que importa.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
