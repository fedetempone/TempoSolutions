import React from "react";
import "../styles/about.css";
import { WhatsappLogo } from "@phosphor-icons/react";

const AboutContact: React.FC = () => {
  const avatarUrl = "./img/about.jpeg";
  const laptopUrl = "./img/projectinmind.avif";

  return (
    <section className="about-contact" id="about">
      <div className="about-contact-container">

        {/* Bloque Izquierdo: Sobre Mí */}
        <div className="about-card">
          <div className="about-profile-wrapper">
            <img src={avatarUrl} alt="Federico" className="about-avatar" />
          </div>
          <div className="about-content">
            <span className="about-badge">Sobre mí</span>
            <p className="about-text">
              Soy Fede, desarrollador Full Stack y técnico en informática.
              Me apasiona la tecnología y ayudar a personas y empresas a resolver
              problemas reales con soluciones efectivas.
            </p>
            <a
              href="https://github.com/fedetempone/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <button className="about-btn-more">
                Conocé más sobre mí
              </button>
            </a>
          </div>
        </div>

        {/* Bloque Derecho: CTA de Contacto */}
        <div className="cta-card">
          <div className="cta-content">
            <h2>¿Tenés un proyecto en mente?</h2>
            <p>Hablemos y llevemos tu idea al siguiente nivel.</p>
            <a
              href="https://wa.me/5491130607355?text=Hola%20Fede!%20Vi%20tu%20portfolio%20y%20quer%C3%ADa%20hacerte%20una%20consulta%20por%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-whatsapp"
            >
              Contactame por WhatsApp
            </a>
          </div>
          <div className="cta-image-wrapper">
            <img src={laptopUrl} alt="Laptop con tecnología" className="cta-laptop-img" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutContact;