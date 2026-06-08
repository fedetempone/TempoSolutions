import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { services } from "./data/services"; // Importamos los datos
import type { Service } from "./data/services"; // Importamos el tipo
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechnicalWorks from "./components/TechnicalWorks";
import About from "./components/About";
import Footer from "./components/Footer";
import ServiceModal from "./components/ServiceModal"; // Importamos el modal aquí
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  // 1. Estado global para manejar el modal de servicios
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // 2. Función para buscar el servicio por ID y abrir el modal
  const handleOpenService = (id: string) => {
    const service = services.find((s) => s.id === id);
    if (service) {
      setSelectedService(service);
    }
  };

  // ref para acceder a la instancia del lenis
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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      
      {/* Pasamos el estado al componente Services */}
      <Services 
        selectedService={selectedService} 
        setSelectedService={setSelectedService} 
      />
      
      <Projects />
      <TechnicalWorks />
      <About />
      
      {/* Pasamos la función al Footer para que pueda abrir el modal */}
      <Footer onOpenService={handleOpenService} />
      
      {/* Modal centralizado en App para que funcione desde cualquier lado */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
      
      <ScrollToTop onClick={handleScrollToTop} />
    </>
  );
}

export default App;