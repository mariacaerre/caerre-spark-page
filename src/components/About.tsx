
const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-white">
              Sobre a Caerre&Co
            </h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed font-ubuntu max-w-4xl mx-auto">
            <p>
              <span className="font-semibold text-purple-200">Pequenas mudanças, grandes resultados.</span> A Caerre&Co é uma consultoria feita para quem empreende de verdade — e quer se comunicar melhor com quem realmente importa.
            </p>
            
            <p>
              Tudo com propósito, estratégia e empatia. Sem fórmulas prontas — só caminhos que funcionam de verdade.
            </p>
            
            <p className="text-purple-200 font-semibold text-xl md:text-2xl">
              <span className="font-pacifico">Esteja você começando ou já em movimento, aqui é o seu lugar.</span>
            </p>
          </div>
        </div>

        {/* Seção da Maria com foto */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bebas text-white mb-6">
                Por trás da Caerre&Co
              </h3>
              
              <div className="space-y-4 text-white leading-relaxed">
                <p className="text-lg">
                  Está <span className="font-semibold text-purple-200">Maria Caerre</span> — 
                  jornalista, especialista em marketing digital e apaixonada por aliar dados, 
                  sensibilidade e comunicação com propósito.
                </p>
                
                <p className="text-lg">
                  É geminiana, mãe de pets e plantas, apaixonada por dirigir e por tudo que envolve criar, comunicar e planejar.
                </p>
                
                <p className="text-lg">
                  Com mais de 10 anos de experiência em conteúdo, CRM, automação e estratégias digitais, já atuou com negócios de todos os tamanhos — mas foi ajudando pequenos negócios que encontrou seu lugar.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white/30">
                  <img 
                    src="/lovable-uploads/ebf56697-e5fa-4caf-b161-d8ca431ad454.png" 
                    alt="Maria Caerre - Fundadora da Caerre&Co" 
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                {/* Elemento decorativo */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
