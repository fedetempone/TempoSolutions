import "../styles/projects.css";
import { GithubLogo } from "@phosphor-icons/react";

const projects = [
    {
        title: "GenHR",
        image: "/img/genhr.png",
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
    return (
        <section className="projects" id="projects">
            <div className="projectsContainer">
                <div className="projectsHeader">
                    <span className="projectsBadge">
                        Portfolio
                    </span>

                    <h2>
                        Proyectos Destacados
                    </h2>

                    <p>
                        Soluciones desarrolladas utilizando tecnologías modernas,
                        enfocadas en rendimiento, experiencia de usuario y calidad visual.
                    </p>
                </div>

                <div className="projectsGrid">
                    {projects.map((project) => (
                        <article
                            className="projectCard"
                            key={project.title}
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
                                        <span
                                            className="techBadge"
                                            key={tech}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
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