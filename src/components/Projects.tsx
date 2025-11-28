
export default function Projects() {
    const projects = [
        {
            title: "Application Gestion Administrative Scolaire",
            description: "Application complète de gestion administrative développée avec Laravel pour gérer les étudiants, les professeurs et les cours dans un établissement scolaire.",
            technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
            category: "Web Application"
        },
        {
            title: "Application de Vote Électronique",
            description: "Système de vote sécurisé avec interface React, application mobile Flutter et API RESTful complète avec authentification et gestion des sessions.",
            technologies: ["React", "Flutter", "Node.js", "Express", "MySQL", "JWT"],
            category: "Full-Stack"
        },
        {
            title: "Application Mobile Flutter",
            description: "Application mobile cross-platform avec système d'authentification, navigation fluide et interface utilisateur moderne suivant les guidelines Material Design.",
            technologies: ["Flutter", "Dart", "Firebase", "REST API"],
            category: "Mobile"
        },
        {
            title: "API REST Node.js",
            description: "API REST complète avec opérations CRUD, système d'authentification JWT, validation des données et documentation Swagger intégrée.",
            technologies: ["Node.js", "Express", "MySQL", "JWT", "Swagger"],
            category: "Back-end"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projets Réalisés</h2>
                <div className="grid grid-2">
                    {projects.map((project, index) => (
                        <div key={index} className="card project-card">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
