
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Projects />
      <Services />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
