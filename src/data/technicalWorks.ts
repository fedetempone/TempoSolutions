// Tipado de las estructuras
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

// Datos para el carrusel de hardware y soporte
export const technicalWorksData: TechnicalWork[] = [
  {
    title: "Armado de Equipos",
    description: "Configuración y armado de computadoras a medida.",
    spec: "Ryzen / Intel",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Upgrade PC / Notebook",
    description: "Cambios de disco, memoria RAM y placas de video.",
    spec: "Mayor velocidad y mejor rendimiento",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Limpieza Profesional",
    description: "Eliminación de polvo, cambio de pasta térmica y flujo de aire.",
    spec: "Mantenimiento Hardware Optimización",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Instalación de S.O.",
    description: "Instalación limpia de Windows, optimización inicial y drivers.",
    spec: "Configuración y estabilidad garantizada",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Redes y Seguridad",
    description: "Configuración de routers, repetidores WiFi y remoción de malware.",
    spec: "Conectividad y protección integral",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  }
];

// Estadísticas modificadas sin el +20 ni +15
export const statsData: StatItem[] = [
  {
    id: "projects",
    label: "Proyectos completados con éxito",
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