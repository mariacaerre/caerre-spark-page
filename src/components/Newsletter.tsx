
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send } from "lucide-react";
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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-primary/5 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-caerre-primary/10">
            <span className="text-2xl">💌</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
            Newsletter / Comunidade
          </h2>
        </div>

        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Receba conteúdos que realmente fazem diferença.
        </p>

        <Card className="p-8 bg-white border-2 border-caerre-primary/20 max-w-2xl mx-auto shadow-lg">
          <p className="text-lg mb-6 text-gray-700">
            Assine de graça a newsletter da Caerre&Co e receba, uma vez por mês, dicas práticas, ferramentas úteis e reflexões que ajudam de verdade no seu negócio.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="📝 Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-caerre-primary"
              required
            />
            <Input
              type="email"
              placeholder="📧 E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 text-gray-900 placeholder:text-gray-500 border-gray-300 focus:border-caerre-primary"
              required
            />
            <Button 
              type="submit" 
              className="bg-caerre-primary hover:bg-caerre-secondary text-white font-semibold w-full py-3 group shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Assinar e aprender
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            📬 Envio mensal, sem spam. Só o que importa.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
