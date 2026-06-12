import { useEffect, useRef } from "react";
import "../styles/projects.css";
import { GithubLogo } from "@phosphor-icons/react";

const projects = [
  {
    title: "GenHR",
    image: "/img/genhr.png",
    link: "https://www.genhr.com.ar/",
    description:
      "Plataforma corporativa desarrollada para una consultora de Recursos Humanos, enfocada en experiencia premium, animaciones avanzadas y optimización de rendimiento.",
    technologies: [
      "React",
      "Vite",
      "Framer Motion",
      "Three.js",
      "GSAP",
    ],
  },
  {
    title: "Tuky Garage",
    image: "/img/tukygarage.png",
    link: "https://tukygarage.netlify.app/",
    description:
      "Sitio web profesional para taller mecánico, diseñado para fortalecer la presencia digital del negocio y facilitar el contacto con potenciales clientes.",
    technologies: [
      "React",
      "Vite",
      "Framer Motion",
      "React Router",
      "Lenis",
    ],
  },
  {
    title: "Lego Ecommerce",
    image: "/img/legoecommerce.png",
    link: "https://ecommerce-legotempone.onrender.com/",
    description:
      "E-commerce Full Stack con catálogo dinámico, carrito de compras, gestión de productos y conexión con base de datos.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Context API",
      "React Router",
    ],
  },
];

const Projects = () => {
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const prevY = useRef<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const index = Number(target.dataset.index);
          const currentY = entry.boundingClientRect.top;

          if (entry.isIntersecting) {
            if (prevY.current[index] !== undefined) {
              if (currentY < prevY.current[index]) {
                target.classList.remove("projectFromTop");
                target.classList.add("projectFromBottom");
              } else {
                target.classList.remove("projectFromBottom");
                target.classList.add("projectFromTop");
              }
            }
            target.classList.add("projectCardVisible");
          } else {
            target.classList.remove("projectCardVisible", "projectFromBottom", "projectFromTop");
          }

          prevY.current[index] = currentY;
        });
      },
      {
        threshold: 0.1, 
        rootMargin: "0px 0px -40px 0px"
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projectsContainer">
        <div className="projectsHeader">
          <span className="projectsBadge">Portfolio</span>

          <h2>Proyectos Destacados</h2>

          <p>
            Soluciones desarrolladas utilizando tecnologías modernas,
            enfocadas en rendimiento, experiencia de usuario y calidad visual.
          </p>
        </div>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard"
              key={project.title}
              data-index={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                animationDelay: `${index * 120}ms` 
              } as React.CSSProperties}
            >
              <div className="projectImageWrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectImage"
                />
              </div>

              <div className="projectContent">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="projectTech">
                  {project.technologies.map((tech) => (
                    <span className="techBadge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/fedetempone"
          target="_blank"
          rel="noopener noreferrer"
          className="githubButton"
        >
          <GithubLogo size={20} weight="fill" />
          Ver más proyectos
        </a>
      </div>
    </section>
  );
};

export default Projects;