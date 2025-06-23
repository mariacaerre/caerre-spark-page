
import Header from "@/components/Header";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Services />
      <About />
      <Projects />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
