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
    <nav className="navbar">
      <div className="navbarContainer">
        {/* Logo */}

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

        {/* Desktop Navigation */}

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
            onClick={() => scrollToSection("technicalWorks")}
          >
            Trabajos Técnicos
          </button>

          <button
            className="navLink"
            onClick={() => scrollToSection("about")}
          >
            Sobre Mí
          </button>

          <button
            className="navLink"
            onClick={() => scrollToSection("contact")}
          >
            Contacto
          </button>

          <button className="quoteButton">
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
            scrollToSection("technicalWorks");
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

        <button
          className="mobileNavLink"
          onClick={() => {
            scrollToSection("contact");
            handleLinkClick();
          }}
        >
          Contacto
        </button>

        <button
          className="mobileQuoteButton"
          onClick={() => {
            scrollToSection("contact");
            handleLinkClick();
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