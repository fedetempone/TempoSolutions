import {
  WhatsappLogo,
  Clock,
  Gear,
  ShieldCheck,
  Lifebuoy,
  Monitor,
} from "@phosphor-icons/react";

import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="hero" className="heroSection">
      <div className="heroContainer">
        {/* Left Content */}
        <div className="heroContent">
          <div className="heroBadge">
            <span className="badgeDot"></span>
            <p>
              SOLUCIONES TECNOLÓGICAS PARA PERSONAS Y EMPRESAS
            </p>
          </div>

          <h1 className="heroTitle">
            Tecnología que
            <br />
            <span>impulsa tu futuro</span>
          </h1>

          <p className="heroDescription">
            Desarrollo web profesional, soporte técnico y
            soluciones integrales para ayudarte a llevar tu
            proyecto al siguiente nivel.
          </p>

          <div className="heroButtons">
            <a
              href="https://wa.me/5491130607355?text=Hola%20Fede!%20Estuve%20viendo%20tu%20portfolio%20de%20TempoSolutions%20y%20me%20gustaría%20que%20charlemos%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <button className="primaryButton">
                <WhatsappLogo size={24} weight="fill" />
                Escribime por WhatsApp
              </button>
            </a>
            <a href="#projects" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <button className="secondaryButton">
                Ver Proyectos
              </button>
            </a>
          </div>

          <div className="heroFeatures">
            <div className="featureItem">
              <Clock size={28} />
              <div>
                <h5>Respuesta rápida</h5>
                <p>Atención personalizada</p>
              </div>
            </div>

            <div className="featureItem">
              <Gear size={28} />
              <div>
                <h5>Soluciones a medida</h5>
                <p>Adaptadas a vos</p>
              </div>
            </div>

            <div className="featureItem">
              <ShieldCheck size={28} />
              <div>
                <h5>Calidad garantizada</h5>
                <p>Resultados profesionales</p>
              </div>
            </div>

            <div className="featureItem">
              <Lifebuoy size={28} />
              <div>
                <h5>Soporte continuo</h5>
                <p>Siempre a tu lado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image with Complex Circuit Matrix */}
        <div className="heroImageContainer">
          <div className="glowEffect"></div>

          {/* MATRIZ DE CIRCUITOS COMPLETA (Cruces Izquierda-Derecha y viceversa) */}
          <svg className="tech-lines-svg" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* CAPA 1: Líneas Principales (Izquierda a Derecha) */}
            <path d="M 50 120 L 250 120 L 310 60 L 520 60 L 560 100 L 600 100" stroke="rgba(0, 102, 255, 0.22)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 120 180 L 320 180 L 370 230 L 500 230 L 530 260 L 590 260" stroke="rgba(0, 102, 255, 0.25)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 80 40 L 180 40 L 220 0 L 450 0" stroke="rgba(0, 102, 255, 0.12)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 200 320 L 350 320 L 400 370 L 550 370" stroke="rgba(0, 102, 255, 0.18)" strokeWidth="2" strokeLinecap="round" />

            {/* CAPA 2: Líneas de Cruce Inverso (Derecha a Izquierda) */}
            <path d="M 580 40 L 420 40 L 360 100 L 190 100 L 150 140 L 0 140" stroke="rgba(0, 102, 255, 0.18)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 550 150 L 460 150 L 400 90 L 280 90 L 230 140 L 100 140" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 600 290 L 480 290 L 430 240 L 290 240 L 250 200 L 150 200" stroke="rgba(0, 102, 255, 0.2)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 450 420 L 330 420 L 280 370 L 90 370" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="2" strokeLinecap="round" />

            {/* CAPA 3: Micro-buses y conexiones verticales secundarias */}
            <path d="M 280 90 L 280 150 L 310 180" stroke="rgba(0, 102, 255, 0.1)" strokeWidth="1" strokeLinecap="round" />
            <path d="M 430 240 L 430 290" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 320 180 L 350 150" stroke="rgba(0, 102, 255, 0.15)" strokeWidth="1.5" strokeLinecap="round" />

            {/* Nodos de Conexión Eléctrica (Círculos terminales e intersecciones) */}
            <circle cx="50" cy="120" r="3.5" fill="rgba(0, 102, 255, 0.5)" />
            <circle cx="120" cy="180" r="4" fill="rgba(0, 102, 255, 0.6)" />
            <circle cx="200" cy="320" r="3.5" fill="rgba(0, 102, 255, 0.4)" />
            <circle cx="580" cy="40" r="3.5" fill="rgba(0, 102, 255, 0.4)" />
            <circle cx="550" cy="150" r="3" fill="rgba(0, 102, 255, 0.35)" />
            <circle cx="150" cy="200" r="3.5" fill="rgba(0, 102, 255, 0.4)" />
            <circle cx="450" cy="420" r="3.5" fill="rgba(0, 102, 255, 0.4)" />

            {/* Puntos de soldadura flotantes intermedios */}
            <circle cx="310" cy="60" r="2" fill="rgba(0, 102, 255, 0.5)" />
            <circle cx="400" cy="90" r="2" fill="rgba(0, 102, 255, 0.5)" />
            <circle cx="370" cy="230" r="2.5" fill="rgba(0, 102, 255, 0.6)" />
          </svg>

          <img
            src="/img/pcbanner.png"
            alt="PC Gamer"
            className="heroImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;