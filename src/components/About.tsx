
const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-secondary rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl font-bold">✨</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bebas text-caerre-primary">
            Sobre a Caerre&Co
          </h2>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-ubuntu">
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

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-700">
              Por trás da Caerre&Co está <span className="font-semibold text-caerre-primary">Maria Caerre</span> — 
              jornalista, especialista em marketing digital e apaixonada por unir dados, sensibilidade e comunicação com propósito.
            </p>
            
            <p className="text-lg text-gray-700 mt-4">
              Com mais de 10 anos de experiência em conteúdo, CRM, automação e estratégias digitais, Maria já atuou com negócios de todos os tamanhos, 
              sempre com escuta ativa, pensamento estratégico e um olhar humano por trás de cada entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
