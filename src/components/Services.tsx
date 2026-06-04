import { ArrowRight } from "@phosphor-icons/react";

import { services } from "../data/services";

import "../styles/services.css";

const Services = () => {
  return (
    <section
      id="services"
      className="servicesSection"
    >
      <div className="servicesContainer">
        <span className="sectionBadge">
          Servicios
        </span>

        <h2 className="sectionTitle">
          ¿En qué puedo ayudarte?
        </h2>

        <p className="sectionDescription">
          Ofrezco soluciones integrales en tecnología
          para potenciar tu negocio y resolver
          problemas del día a día.
        </p>

        <div className="servicesGrid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="serviceCard"
              >
                <Icon
                  size={42}
                  weight="regular"
                />

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      ✓ {item}
                    </li>
                  ))}
                </ul>

                <button className="serviceButton">
                  Más información
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;