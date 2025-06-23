
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ForWho from "@/components/ForWho";
import Results from "@/components/Results";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Projects />
      <Services />
      <ForWho />
      <Results />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
