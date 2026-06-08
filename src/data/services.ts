import {
  Code,
  Wrench,
  Desktop,
  ChatCenteredText,
} from "@phosphor-icons/react";

import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";

export interface Service {
  id: string; // ID añadido para facilitar la búsqueda en el Footer
  icon: ComponentType<IconProps>;
  title: string;
  description: string;
  items: string[];
  modalDescription: string;
  modalFeatures: string[];
}

export const services: Service[] = [
  {
    id: "web",
    icon: Code,
    title: "Desarrollo Web",
    description:
      "Sitios modernos, rápidos y optimizados para convertir visitantes en clientes.",
    items: [
      "Landing Pages",
      "Sitios Institucionales",
      "Tiendas Online",
      "Aplicaciones Web Integradas",
    ],
    modalDescription:
      "Desarrollo sitios web modernos, rápidos y optimizados para ayudar a tu negocio a captar más clientes y transmitir una imagen profesional.",
    modalFeatures: [
      "Diseño responsive",
      "Optimización SEO",
      "Integración con WhatsApp",
      "Formularios personalizados",
      "Desarrollo a medida",
    ],
  },
  {
    id: "soporte",
    icon: Wrench,
    title: "Soporte Técnico",
    description:
      "Solución de problemas y mantenimiento para que todo funcione perfecto.",
    items: [
      "Formateo e instalación",
      "Optimización de sistemas",
      "Eliminación de virus",
      "Respaldo de información",
    ],
    modalDescription:
      "Servicio de mantenimiento, reparación y optimización para computadoras personales y equipos de trabajo.",
    modalFeatures: [
      "Diagnóstico completo",
      "Limpieza de malware",
      "Instalación de software",
      "Backup de información",
      "Optimización de rendimiento",
    ],
  },
  {
    id: "armado",
    icon: Desktop,
    title: "Armado y Reparación de PCs",
    description:
      "Armado personalizado, upgrades y reparación de equipos de escritorio y notebooks.",
    items: [
      "Elección y Compra de Hardware",
      "Planificación de Upgrades",
      "Optimización de Sistemas",
      "Respaldos y Copias de Seguridad",
    ],
    modalDescription:
      "Armado de PCs a medida para gaming, oficina o trabajo profesional. También realizo reparación y actualización de equipos existentes.",
    modalFeatures: [
      "PC Gamer",
      "Workstations",
      "Instalación de SSD",
      "Cambio de componentes",
      "Mantenimiento preventivo",
    ],
  },
  {
    id: "it",
    icon: ChatCenteredText,
    title: "Asesoramiento IT",
    description:
      "Te guío para potenciar tus equipos actuales y tomar las mejores decisiones de compra sin gastar de más.",
    items: [
      "Compra de Hardware",
      "Redes y conectividad",
      "Seguridad informática",
      "Mejora de rendimiento",
    ],
    modalDescription:
      "Asesoramiento tecnológico para personas y empresas que buscan invertir correctamente en equipamiento y soluciones IT.",
    modalFeatures: [
      "Elección de hardware",
      "Planificación de upgrades",
      "Seguridad informática",
      "Redes domésticas",
      "Optimización de inversión",
    ],
  },
];