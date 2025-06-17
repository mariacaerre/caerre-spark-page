
const About = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-caerre-gold rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl font-bold">🧭</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-caerre-primary">
            Sobre a Caerre&Co
          </h2>
        </div>
        
        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
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
            Sem fórmulas prontas. Com ferramentas que funcionam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
