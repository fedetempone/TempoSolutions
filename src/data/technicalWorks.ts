// tipado de estructuras
export interface TechnicalWork {
  title: string;
  description: string;
  spec: string;
  image: string;
}

export interface StatItem {
  id: "projects" | "clients" | "experience" | "quality";
  label: string;
  value: string;
}

// datos para carrusel hardarware y soporte
export const technicalWorksData: TechnicalWork[] = [
  {
    title: "Armado de Equipos",
    description: "Configuración y armado de computadoras a medida.",
    spec: "Ryzen / Intel",
    image: "./img/armado.avif"
  },
  {
    title: "Upgrade PC / Notebook",
    description: "Cambios de disco, memoria RAM y placas de video.",
    spec: "Mayor velocidad y mejor rendimiento",
    image: "./img/upgrade.png"
  },
  {
    title: "Limpieza Profesional",
    description: "Eliminación de polvo, cambio de pasta térmica y flujo de aire.",
    spec: "Mantenimiento Hardware Optimización",
    image: "./img/limpieza.png"
  },
  {
    title: "Instalación de S.O.",
    description: "Instalación limpia de Windows, optimización inicial y drivers.",
    spec: "Configuración y estabilidad garantizada",
    image: "./img/instalacion.png"
  },
  {
    title: "Redes y Seguridad",
    description: "Configuración de routers, repetidores WiFi y remoción de malware.",
    spec: "Conectividad y protección integral",
    image: "./img/redes.avif"
  }
];

// estadisticas 
export const statsData: StatItem[] = [
  {
    id: "projects",
    label: "Proyectos finalizados con éxito",
    value: ""
  },
  {
    id: "clients",
    label: "Clientes satisfechos y recomendados",
    value: ""
  },
  {
    id: "experience",
    label: "Años de experiencia en el sector",
    value: "+10"
  },
  {
    id: "quality",
    label: "Compromiso con la calidad y los resultados",
    value: "100%"
  }
];