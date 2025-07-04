
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16"> {/* Espaçamento para o menu fixo */}
        <Header />
        <Projects />
        <Services />
        <About />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
