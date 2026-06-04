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

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Columna 1: Branding y Redes */}
        <div className="footer-brand-col">
          <div className="footer-logo-box">
            <img src="/img/logobackgroundremoveshort.png" alt="Tempo Solutions Logo" className="footer-logo" />
            <h2 className="footer-brand-title">TEMPO<span>SOLUTIONS</span></h2>
          </div>
          <p className="footer-brand-text">
            Soluciones tecnológicas para personas y empresas.
          </p>
          <div className="footer-socials">
            <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappLogo size={22} weight="light" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramLogo size={22} weight="light" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinLogo size={22} weight="light" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubLogo size={22} weight="light" />
            </a>
          </div>
        </div>

        {/* Columna 2: Navegación */}
        <div className="footer-links-col">
          <h3>NAVEGACIÓN</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#technical">Trabajos Técnicos</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Servicios */}
        <div className="footer-links-col">
          <h3>SERVICIOS</h3>
          <ul>
            <li><a href="#web">Desarrollo Web</a></li>
            <li><a href="#soporte">Soporte Técnico</a></li>
            <li><a href="#armado">Armado y Reparación de PCs</a></li>
            <li><a href="#it">Asesoramiento IT</a></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer-links-col">
          <h3>CONTACTO</h3>
          <ul className="footer-contact-info">
            <li>
              <Phone size={18} />
              <span>+54 1130607355</span>
            </li>
            <li>
              <EnvelopeSimple size={18} />
              <span>hola@temposolutions.com.ar</span>
            </li>
            <li>
              <MapPin size={18} />
              <span>Argentina</span>
            </li>
          </ul>
        </div>

        {/* Columna 5: Legal */}
        <div className="footer-links-col">
          <h3>LEGAL</h3>
          <ul>
            <li><a href="#privacidad">Política de Privacidad</a></li>
            <li><a href="#terminos">Términos y Condiciones</a></li>
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