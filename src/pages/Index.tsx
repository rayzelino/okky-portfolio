import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FloatingMenu from "@/components/FloatingMenu";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import LogoTicker from "@/components/LogoTicker";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      setTimeout(() => {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

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
