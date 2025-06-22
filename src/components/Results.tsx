
import { Check } from "lucide-react";

const Results = () => {
  const results = [
    "Aumentar sua presença e autoridade online",
    "Melhorar sua comunicação e atrair o público certo", 
    "Vender mais com consistência e intenção",
    "Economizar tempo usando IA no seu dia a dia"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-caerre-cream to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-primary rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl font-bold">📈</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
            Resultados possíveis
          </h2>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          Com nossos serviços e conteúdos, você pode:
        </p>

        <div className="grid gap-6 text-center max-w-3xl mx-auto">
          {results.map((result, index) => (
            <div key={index} className="flex items-center justify-center space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-6 h-6 bg-caerre-gold rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
