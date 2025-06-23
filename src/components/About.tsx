
const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-caerre-cream via-white to-caerre-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-caerre-secondary rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-xl font-bold">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
              Sobre a Caerre&Co
            </h2>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-ubuntu max-w-4xl mx-auto">
            <p>
              A <span className="font-semibold text-caerre-primary">Caerre&Co</span> existe pra apoiar 
              empreendedores reais a transformarem ideias boas em negócios fortes e com presença.
            </p>
            
            <p>
              Seja você alguém começando ou já em movimento, mas sentindo que falta 
              <span className="font-semibold text-caerre-accent"> clareza, consistência ou direção</span> — 
              aqui é o lugar.
            </p>
            
            <p className="text-caerre-primary font-semibold text-xl md:text-2xl">
              Trabalhamos com propósito, estratégia e identidade. 
              <br />
              <span className="font-pacifico">Sem fórmulas prontas. Com ferramentas que funcionam.</span>
            </p>
          </div>
        </div>

        {/* Seção da Maria com foto */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bebas text-caerre-primary mb-6">
                Por trás da Caerre&Co
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Está <span className="font-semibold text-caerre-primary">Maria Caerre</span> — 
                  jornalista, especialista em marketing digital e apaixonada por unir dados, 
                  sensibilidade e comunicação com propósito.
                </p>
                
                <p className="text-lg">
                  Com mais de 10 anos de experiência em conteúdo, CRM, automação e estratégias digitais, 
                  Maria já atuou com negócios de todos os tamanhos, sempre com escuta ativa, 
                  pensamento estratégico e um olhar humano por trás de cada entrega.
                </p>

                <div className="pt-4">
                  <p className="text-caerre-accent font-medium italic">
                    "Acredito que todo negócio tem uma história única para contar. 
                    Meu papel é ajudar você a encontrar e compartilhar a sua."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-caerre-light">
                  <img 
                    src="/lovable-uploads/ebf56697-e5fa-4caf-b161-d8ca431ad454.png" 
                    alt="Maria Caerre - Fundadora da Caerre&Co" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Elemento decorativo */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-caerre-accent rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-caerre-secondary rounded-full opacity-15"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
