import FloatingMenu from "@/components/FloatingMenu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import LogoTicker from "@/components/LogoTicker";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingMenu />
      <Hero />
      <About />
      <Projects />
      <LogoTicker />
      <Footer />
    </div>
  );
};

export default Index;
