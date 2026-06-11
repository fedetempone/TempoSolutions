import React from "react";
import "../styles/footer.css";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  WhatsappLogo,
  Phone,
  EnvelopeSimple,
  MapPin
} from "@phosphor-icons/react";

interface FooterProps {
  onOpenService: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenService }) => {
  return (
    <footer className="footer">
      {/* Fondo de Ondas  */}
      <div className="footer-wave-bg">
        <svg className="wave-bg-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path 
            d="M0,96C240,128,480,224,720,213.3C960,203,1200,85,1320,26.7L1440,0L1440,400L1320,400C1200,400,960,400,720,400C480,400,240,400,0,400Z" 
            fill="rgba(45, 124, 255, 0.02)"
          />
          <path 
            d="M0,192C240,149,480,64,720,80C960,96,1200,213,1320,272L1440,320L1440,400L1320,400C1200,400,960,400,720,400C480,400,240,400,0,400Z" 
            fill="rgba(45, 124, 255, 0.03)"
          />
          <path 
            d="M0,288C240,299,480,320,720,277.3C960,235,1200,128,1320,74.7L1440,21.3L1440,400L1320,400C1200,400,960,400,720,400C480,400,240,400,0,400Z" 
            fill="rgba(45, 124, 255, 0.025)"
          />
        </svg>
      </div>

      <div className="footer-container">
        {/* Columna 1: Branding y Redes */}
        <div className="footer-brand-col">
          <div className="footer-logo-box">
            <img src="/img/newlogotransparent.png" alt="Tempo Solutions Logo" className="footer-logo" />
            <h2 className="footer-brand-title">TEMPO<span>SOLUTIONS</span></h2>
          </div>
          <p className="footer-brand-text">
            Soluciones tecnológicas para personas y empresas.
          </p>
          <div className="footer-socials">
            <a href="https://wa.me/5491130607355" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappLogo size={22} weight="light" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramLogo size={22} weight="light" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinLogo size={22} weight="light" />
            </a>
            <a href="https://github.com/fedetempone" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubLogo size={22} weight="light" />
            </a>
          </div>
        </div>

        {/* Columna 2: Navegacion */}
        <div className="footer-links-col">
          <h3>NAVEGACIÓN</h3>
          <ul>
            <li><a href="#navbarSectionId">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#technical">Trabajos Técnicos</a></li>
            <li><a href="#about">Sobre Mí</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios  */}
        <div className="footer-links-col">
          <h3>SERVICIOS</h3>
          <ul>
            <li><button onClick={() => onOpenService("web")}>Desarrollo Web</button></li>
            <li><button onClick={() => onOpenService("soporte")}>Soporte Técnico</button></li>
            <li><button onClick={() => onOpenService("armado")}>Armado y Reparación de PCs</button></li>
            <li><button onClick={() => onOpenService("it")}>Asesoramiento IT</button></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer-links-col">
          <h3>CONTACTO</h3>
          <ul className="footer-contact-info">
            <li>
              <Phone size={18} />
              <a href="tel:+541130607355" className="footer-phone-link">
                +54 11 3060 7355
              </a>
            </li>
            <li>
              <EnvelopeSimple size={18} />
              <a href="mailto:hola@temposolutions.com.ar" className="footer-email-link">
                hola@temposolutions.com.ar
              </a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Argentina</span>
            </li>
          </ul>
        </div>

        {/* Columna 5: Legal */}
        <div className="footer-links-col">
          <h3>LEGAL & INFO</h3>
          <ul>
            <li><a href="https://www.termsfeed.com/live/931d0bc8-984c-44c4-a2c0-f2cdcf7924cd">Política de Privacidad</a></li>
            <li><a href="https://github.com/fedetempone/TempoSolutions">Open Source</a></li>
          </ul>
        </div>
      </div>

      {/* Barra Inferior de Derechos */}
      <div className="footer-bottom">
        <p>© 2026 TempoSolutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;