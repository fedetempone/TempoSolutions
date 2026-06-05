import {
  X,
  WhatsappLogo,
} from "@phosphor-icons/react";

import type { Service } from "../data/services.ts";

import "../styles/serviceModal.css";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal = ({
  service,
  onClose,
}: ServiceModalProps) => {
  if (!service) return null;

  return (
    <div
      className="modalOverlay"
      onClick={onClose}
    >
      <div
        className="modalContent"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="closeButton"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <span className="modalBadge">
          Servicio
        </span>

        <h2>{service.title}</h2>

        <p className="modalDescription">
          {service.modalDescription}
        </p>

        <div className="modalFeatures">
          {service.modalFeatures.map(
            (feature) => (
              <div key={feature}>
                ✓ {feature}
              </div>
            )
          )}
        </div>

        <a
          href="https://wa.me/541130607355"
          target="_blank"
          rel="noopener noreferrer"
          className="modalWhatsapp"
        >
          <WhatsappLogo size={22} />
          Solicitar presupuesto
        </a>
      </div>
    </div>
  );
};

export default ServiceModal;