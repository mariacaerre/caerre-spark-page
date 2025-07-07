
const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col items-center justify-center mb-6 md:mb-8">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-white text-center">
              Sobre a Caerre&Co
            </h2>
          </div>
          
          <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl text-white leading-relaxed font-ubuntu max-w-4xl mx-auto">
            <p>
              A Caerre&Co é uma consultoria feita para quem empreende de verdade e quer se comunicar melhor na internet.
            </p>
            
            <p>
              Tudo com propósito, estratégia e empatia. Sem fórmulas prontas — só caminhos que funcionam de verdade. Esteja você começando ou já em movimento, aqui é o seu lugar.
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-6 md:p-8 lg:p-12 max-w-5xl mx-auto border border-white/20">
          <div className="grid gap-6 md:gap-8 lg:gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bebas text-white">
                  Por trás da Caerre&Co está Maria Caerre
                </h3>
              </div>
              
              <div className="space-y-3 md:space-y-4 text-white leading-relaxed">
                <p className="text-sm md:text-base lg:text-lg">
                  Jornalista, especialista em marketing digital e apaixonada por aliar dados, sensibilidade e comunicação com propósito.
                </p>
                
                <p className="text-sm md:text-base lg:text-lg">
                  É geminiana, mãe de pets e plantas, apaixonada por dirigir e por tudo que envolve criar, comunicar e planejar.
                </p>
                
                <p className="text-sm md:text-base lg:text-lg">
                  Tem mais de 10 anos de experiência em conteúdo, CRM, automação e estratégias digitais.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-40 md:w-52 lg:w-64 h-40 md:h-52 lg:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white/30">
                  <img 
                    src="/lovable-uploads/ebf56697-e5fa-4caf-b161-d8ca431ad454.png" 
                    alt="Maria Caerre - Fundadora da Caerre&Co" 
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-8 md:w-12 h-8 md:h-12 bg-white/20 rounded-full"></div>
                <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 w-10 md:w-16 h-10 md:h-16 bg-white/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
