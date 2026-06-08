import { useEffect, useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

import "../styles/navBar.css";

const scrollToSection = (id: string): void => {
  const section = document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "auto";
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 999 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav id="navbarSectionId" className="navbar">
      <div className="navbarContainer">
        {/* logo */}
        <div
          className="logoContainer"
          onClick={() => {
            scrollToSection("hero");
            handleLinkClick();
          }}
        >
          <img
            src="/img/logobackgroundremoveshort.png"
            alt="TempoSolutions Logo"
            className="logoImage"
          />

          <div className="logoContent">
            <h4 className="logoTitle">
              Tempo<span>Solutions</span>
            </h4>

            <span className="logoSubtitle">
              Soluciones Tecnológicas
            </span>
          </div>
        </div>

        {/* desktop */}
        <div className="desktopNavigation">
          <button
            className="navLink"
            onClick={() => scrollToSection("hero")}
          >
            Inicio
          </button>

          <button
            className="navLink"
            onClick={() => scrollToSection("services")}
          >
            Servicios
          </button>

          <button
            className="navLink"
            onClick={() => scrollToSection("projects")}
          >
            Proyectos
          </button>

          <button
            className="navLink"
            onClick={() => scrollToSection("technical")}
          >
            Trabajos Técnicos
          </button>

          <button
            className="navLink"
            onClick={() => scrollToSection("about")}
          >
            Sobre Mí
          </button>

          {/* boton de contacto version escritorio */}
          <button
            className="navLink"
            onClick={() => {
              window.open(
                "https://wa.me/5491130607355?text=Hola%20Fede!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TempoSolutions%20y%20pedirte%20un%20presupuesto.",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            Contacto
          </button>

          {/* Botón principal destacado */}
          <button 
            className="quoteButton"
            onClick={() => {
              window.open(
                "https://wa.me/5491130607355?text=Hola%20Fede!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TempoSolutions%20y%20pedirte%20un%20presupuesto.",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <PaperPlaneTilt size={18} weight="fill" />
            Solicitar Presupuesto
          </button>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={handleMenuToggle}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="mobileNavLink"
          onClick={() => {
            scrollToSection("hero");
            handleLinkClick();
          }}
        >
          Inicio
        </button>

        <button
          className="mobileNavLink"
          onClick={() => {
            scrollToSection("services");
            handleLinkClick();
          }}
        >
          Servicios
        </button>

        <button
          className="mobileNavLink"
          onClick={() => {
            scrollToSection("projects");
            handleLinkClick();
          }}
        >
          Proyectos
        </button>

        <button
          className="mobileNavLink"
          onClick={() => {
            scrollToSection("technical");
            handleLinkClick();
          }}
        >
          Trabajos Técnicos
        </button>

        <button
          className="mobileNavLink"
          onClick={() => {
            scrollToSection("about");
            handleLinkClick();
          }}
        >
          Sobre Mí
        </button>

        {/* boton de contacto version mobile */}
        <button
          className="mobileNavLink"
          onClick={() => {
            window.open(
              "https://wa.me/5491130607355?text=Hola%20Fede!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TempoSolutions%20y%20pedirte%20un%20presupuesto.",
              "_blank",
              "noopener,noreferrer"
            );
            handleLinkClick();
          }}
        >
          Contacto
        </button>
        <button 
            className="mobileQuoteButton"
            onClick={() => {
              window.open(
                "https://wa.me/5491130607355?text=Hola%20Fede!%20Me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TempoSolutions%20y%20pedirte%20un%20presupuesto.",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <PaperPlaneTilt size={18} weight="fill" />
            Solicitar Presupuesto
          </button>
      </div>
    </nav>
  );
};

export default Navbar;