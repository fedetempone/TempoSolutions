// import { useState } from "react";

// import {
//   ArrowRight,
// } from "@phosphor-icons/react";

// import { services } from "../data/services";
// import type { Service } from "../data/services";

// import ServiceModal from "./ServiceModal";

// import "../styles/services.css";

// const Services = () => {
//   const [
//     selectedService,
//     setSelectedService,
//   ] = useState<Service | null>(null);

//   return (
//     <section
//       id="services"
//       className="servicesSection"
//     >
//       <div className="servicesContainer">
//         <span className="sectionBadge">
//           Servicios
//         </span>

//         <h2 className="sectionTitle">
//           ¿En qué puedo ayudarte?
//         </h2>

//         <p className="sectionDescription">
//           Ofrezco soluciones integrales en
//           tecnología para potenciar tu negocio
//           y resolver problemas del día a día.
//         </p>

//         <div className="servicesGrid">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.title}
//                 className="serviceCard"
//               >
//                 <Icon
//                   size={42}
//                   weight="regular"
//                 />

//                 <h3>{service.title}</h3>

//                 <p>
//                   {service.description}
//                 </p>

//                 <ul>
//                   {service.items.map((item) => (
//                     <li key={item}>
//                       ✓ {item}
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   className="serviceButton"
//                   onClick={() =>
//                     setSelectedService(service)
//                   }
//                 >
//                   Más información

//                   <ArrowRight size={16} />
//                 </button>
//               </article>
//             );
//           })}
//         </div>
//       </div>

//       <ServiceModal
//         service={selectedService}
//         onClose={() =>
//           setSelectedService(null)
//         }
//       />
//     </section>
//   );
// };

// export default Services;

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
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="serviceCard">
                <Icon size={42} weight="regular" />

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.items.map((item) => (
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

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};

export default Services;