import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechnicalWorks from "./components/TechnicalWorks";
import About from "./components/About";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop"; // Importamos el botón

function App() {
  // Usamos un ref para poder acceder a la instancia de lenis fuera del useEffect
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializamos el scroll suave con los ajustes de FPS que tuneamos
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      lerp: 0.08,
    });

    lenisRef.current = lenis; // Guardamos la instancia

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // CONTROL DEL SCROLL SUAVE PARA LINKS INTERNOS (#)
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

  // Función para manejar la subida usando la fluidez de Lenis
  const handleScrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 1.8, // Un viaje al tope bastante suave pero no tan lento como las secciones
        immediate: false
      });
    }
  };

  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Projects />
      <TechnicalWorks />
      <About />
      <Footer />
      
      {/* Botón siempre visible e integrado al scroll de Lenis */}
      <ScrollToTop onClick={handleScrollToTop} />
    </>
  );
}

export default App;