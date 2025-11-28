

export default function Skills() {
    const skillCategories = [
        {
            title: "Développement Front-end",
            skills: [
                { name: "HTML5", icon: "/logos/html.png" },
                { name: "CSS3", icon: "/logos/css.png" },
                { name: "JavaScript ES6", icon: "/logos/javascript.png" },
                { name: "React.js", icon: "/logos/react.png" },
                { name: "TypeScript", icon: "/logos/typescript.png" },
                { name: "TailwindCSS", icon: "/logos/tailwind.png" },
                { name: "Bootstrap", icon: "/logos/bootstrap.png" }
            ]
        },
        {
            title: "Développement Back-end",
            skills: [
                { name: "PHP", icon: "/logos/php.svg" },
                { name: "Laravel", icon: "/logos/laravel.png" },
                { name: "Node.js", icon: "/logos/nodejs.png" },
                { name: "Express.js", icon: "/logos/express.webp" },
                { name: "MySQL", icon: "/logos/mysql.png" }
            ]
        },
        {
            title: "Développement Mobile & Outils",
            skills: [
                { name: "Flutter", icon: "/logos/flutter.png" },
                { name: "Dart", icon: "/logos/dart.png" },
                { name: "Git & GitHub", icon: "/logos/git.png" },
                { name: "WordPress", icon: "/logos/wordpress.png" },
                { name: "Figma", icon: "/logos/figma.png" }
            ]
        }
    ];

    return (
        <section id="skills" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="container">
                <h2 className="section-title">Compétences Techniques</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skills-category">
                            <h3 className="skills-category-title">{category.title}</h3>
                            <div className="grid grid-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="skill-icon"
                                            onError={(e) => {
                                                const img = e.target as HTMLImageElement;
                                                img.style.display = 'none';
                                                // Ajouter une fallback text
                                                const fallback = document.createElement('div');
                                                fallback.textContent = skill.name.charAt(0);
                                                fallback.style.cssText = `
                                                width: 50px;
                                                height: 50px;
                                                background: var(--accent-color);
                                                color: white;
                                                display: flex;
                                                align-items: center;
                                                justify-content: center;
                                                border-radius: 8px;
                                                font-weight: bold;
                                                `;
                                                img.parentNode?.insertBefore(fallback, img);
                                            }}
                                        />
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
