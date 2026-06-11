// import { ArrowRight } from "@phosphor-icons/react";
// import { services } from "../data/services";
// import type { Service } from "../data/services";
// import ServiceModal from "./ServiceModal";
// import "../styles/services.css";

// interface ServicesProps {
//   selectedService: Service | null;
//   setSelectedService: (service: Service | null) => void;
// }

// const Services = ({ selectedService, setSelectedService }: ServicesProps) => {
//   return (
//     <section id="services" className="servicesSection">
//       <div className="servicesContainer">
//         <span className="sectionBadge">Servicios</span>

//         <h2 className="sectionTitle">¿En qué puedo ayudarte?</h2>

//         <p className="sectionDescription">
//           Ofrezco soluciones integrales en tecnología para potenciar tu negocio 
//           y resolver problemas del día a día.
//         </p>

//         <div className="servicesGrid">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article key={service.title} className="serviceCard">
//                 <Icon size={42} weight="regular" />

//                 <h3>{service.title}</h3>

//                 <p>{service.description}</p>

//                 <ul>
//                   {service.items && service.items.map((item) => (
//                     <li key={item}>✓ {item}</li>
//                   ))}
//                 </ul>

//                 <button
//                   className="serviceButton"
//                   onClick={() => setSelectedService(service)}
//                 >
//                   Más información
//                   <ArrowRight size={16} />
//                 </button>
//               </article>
//             );
//           })}
//         </div>
//       </div>

//       {/* WAVE DIVIDER */}
//       <div className="section-divider-bottom">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
//           <path 
//             d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
//           ></path>
//         </svg>
//       </div>

//       <ServiceModal
//         service={selectedService}
//         onClose={() => setSelectedService(null)}
//       />
//     </section>
//   );
// };

// export default Services;
import { useEffect, useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { services } from "../data/services";
import type { Service } from "../data/services";
import ServiceModal from "./ServiceModal";
import "../styles/services.css";

interface ServicesProps {
  selectedService: Service | null;
  setSelectedService: (service: Service | null) => void;
}

const Services = ({ selectedService, setSelectedService }: ServicesProps) => {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("serviceCardVisible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="servicesSection">
      <div className="servicesContainer">
        <span className="sectionBadge">Servicios</span>

        <h2 className="sectionTitle">¿En qué puedo ayudarte?</h2>

        <p className="sectionDescription">
          Ofrezco soluciones integrales en tecnología para potenciar tu negocio
          y resolver problemas del día a día.
        </p>

        <div className="servicesGrid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="serviceCard"
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <Icon size={42} weight="regular" />

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.items &&
                    service.items.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                </ul>

                <button
                  className="serviceButton"
                  onClick={() => setSelectedService(service)}
                >
                  Más información
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* WAVE DIVIDER */}
      <div className="section-divider-bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default Services;