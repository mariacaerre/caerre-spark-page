
const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-caerre-primary via-caerre-secondary to-caerre-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
              <span className="text-caerre-primary text-xl font-bold">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-white">
              Sobre a Caerre&Co
            </h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-white leading-relaxed font-ubuntu max-w-4xl mx-auto">
            <p>
              A <span className="font-semibold text-caerre-light">Caerre&Co</span> existe pra apoiar 
              empreendedores reais a transformarem ideias boas em negócios fortes e com presença.
            </p>
            
            <p>
              Seja você alguém começando ou já em movimento, mas sentindo que falta 
              <span className="font-semibold text-caerre-light"> clareza, consistência ou direção</span> — 
              aqui é o lugar.
            </p>
            
            <p className="text-caerre-light font-semibold text-xl md:text-2xl">
              Trabalhamos com propósito, estratégia e identidade. 
              <br />
              <span className="font-pacifico">Sem fórmulas prontas. Com ferramentas que funcionam.</span>
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
                  Está <span className="font-semibold text-caerre-light">Maria Caerre</span> — 
                  jornalista, especialista em marketing digital e apaixonada por unir dados, 
                  sensibilidade e comunicação com propósito.
                </p>
                
                <p className="text-lg">
                  Com mais de 10 anos de experiência em conteúdo, CRM, automação e estratégias digitais, 
                  Maria já atuou com negócios de todos os tamanhos, sempre com escuta ativa, 
                  pensamento estratégico e um olhar humano por trás de cada entrega.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white/30">
                  <img 
                    src="/lovable-uploads/ebf56697-e5fa-4caf-b161-d8ca431ad454.png" 
                    alt="Maria Caerre - Fundadora da Caerre&Co" 
                    className="w-full h-full object-cover"
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
