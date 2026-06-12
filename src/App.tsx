import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { services } from "./data/services"; 
import type { Service } from "./data/services"; 
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechnicalWorks from "./components/TechnicalWorks";
import About from "./components/About";
import Footer from "./components/Footer";
import ServiceModal from "./components/ServiceModal"; 
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenService = (id: string) => {
    const service = services.find((s) => s.id === id);
    if (service) {
      setSelectedService(service);
    }
  };

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      lerp: 0.08,
    });

    lenisRef.current = lenis;

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();

        const id = anchor.getAttribute("href");

        if (id) {
          lenis.scrollTo(id, {
            offset: 0,
            duration: 2.2,
            immediate: false 
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const handleScrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.8,
        immediate: false
      });
    }
  };

  return (
    <>
      <NavBar />
      <Hero />
      <Services 
        selectedService={selectedService} 
        setSelectedService={setSelectedService} 
      />
      <Projects />
      <TechnicalWorks />
      <About />
      <Footer onOpenService={handleOpenService} />
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      <ScrollToTop onClick={handleScrollToTop} />
    </>
  );
}

export default App;