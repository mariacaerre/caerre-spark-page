
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-primary/10 rounded-full flex items-center justify-center mr-4">
              <MessageCircle className="h-6 w-6 text-caerre-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Contato
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Pronto para transformar sua comunicação?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bebas text-caerre-primary mb-4">
                Vamos conversar!
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tem uma ideia, projeto ou dúvida? Entre em contato e vamos descobrir juntos como a Caerre&Co pode ajudar você a comunicar melhor e alcançar seus objetivos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-caerre-primary" />
                <span className="text-gray-700">contato@caerre.co</span>
              </div>
            </div>

            <div className="bg-caerre-primary/5 rounded-2xl p-6 border border-caerre-primary/10">
              <p className="text-caerre-primary font-medium mb-2">
                💡 Primeira conversa sempre gratuita
              </p>
              <p className="text-gray-700 text-sm">
                Vamos entender seu desafio e ver como podemos ajudar, sem compromisso.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <Card className="p-8 shadow-lg border-2 border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border-gray-300 focus:border-caerre-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border-gray-300 focus:border-caerre-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-50 border-gray-300 focus:border-caerre-primary min-h-[120px]"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="bg-caerre-primary hover:bg-caerre-secondary text-white font-medium w-full py-3 group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar mensagem
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
