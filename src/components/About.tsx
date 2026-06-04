import React from "react";
import "../styles/about.css";
import { WhatsappLogo } from "@phosphor-icons/react";

const AboutContact: React.FC = () => {
  const avatarUrl = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80"; 
  const laptopUrl = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=500&q=80";

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
            <button className="about-btn-more">Conocé más sobre mí</button>
          </div>
        </div>

        {/* Bloque Derecho: CTA de Contacto */}
        <div className="cta-card">
          <div className="cta-content">
            <h2>¿Tenés un proyecto en mente?</h2>
            <p>Hablemos y llevemos tu idea al siguiente nivel.</p>
            <a 
              href="https://wa.me/tu_numero_de_telefono" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn-whatsapp"
            >
              <WhatsappLogo size={24} weight="fill" />
              Escribime por WhatsApp
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