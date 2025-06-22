
import { Check } from "lucide-react";

const ForWho = () => {
  const benefits = [
    "Tem um negócio e sente que poderia vender mais, comunicar melhor ou atrair os clientes certos",
    "Cansou de soluções genéricas e quer aplicar marketing com propósito",
    "Quer entender como a inteligência artificial pode ajudar de forma prática",
    "Busca aprender com leveza, autonomia e resultados reais"
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-sage rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl font-bold">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
            Para quem é
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          A <span className="font-semibold text-caerre-primary">Caerre&Co</span> é pra você que:
        </p>

        <div className="grid gap-6 text-center max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 w-6 h-6 bg-caerre-accent rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
