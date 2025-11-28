
export default function Experience() {
    const experiences = [
        {
            company: "Amina Togo SARL",
            position: "Ouvrier contractuel",
            period: "2023 - 2025",
            description: "Rigueur dans l'exécution des tâches, travail en équipe efficace, respect strict des procédures et normes de sécurité."
        },
        {
            company: "UNIFOOD TOGO",
            position: "Ouvrier journalier",
            period: "2021 - 2023",
            description: "Contrôle qualité des produits, organisation des processus de production, respect des délais de livraison."
        },
        {
            company: "Amina Togo SARL",
            position: "Magasinier journalier",
            period: "2020 - 2021",
            description: "Gestion efficace des stocks, préparation et vérification des commandes, organisation de l'espace de stockage."
        }
    ];

    return (
        <section id="experience" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="container">
                <h2 className="section-title">Expériences Professionnelles</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-header">
                                <div style={{ flex: '1' }}>
                                    <h3 className="timeline-company">{exp.company}</h3>
                                    <p className="timeline-position">{exp.position}</p>
                                </div>
                                <span className="timeline-period">{exp.period}</span>
                            </div>
                            <p className="timeline-description">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
