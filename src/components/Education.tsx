
export default function Education() {
    const educations = [
        {
            institution: "ADN Golfe 1 (SIMPLON.CO), Lomé",
            degree: "Formation en Développement Web et Mobile",
            period: "Mars 2025 - Décembre 2025",
            details: [
                "HTML, CSS, JavaScript",
                "PHP, Laravel",
                "React, TypeScript (TSX)",
                "Node.js",
                "Flutter (Dart)",
                "Développement web responsive",
                "Outils : Git, GitHub, VS Code, XAMPP",
                "Méthodes agiles / travail en équipe"
            ]
        },
        {
            institution: "Université de Lomé, Togo",
            degree: "Licence en Biologie et Physiologie Végétale",
            period: "Janvier 2021 - Présent",
            details: []
        },
        {
            institution: "Lycée Marie Romano, Niamtougou",
            degree: "Baccalauréat - Série D",
            period: "Octobre 2019 - Septembre 2020",
            details: []
        }
    ];

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Formation</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {educations.map((edu, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-header">
                                <div style={{ flex: '1' }}>
                                    <h3 className="timeline-company">{edu.institution}</h3>
                                    <p className="timeline-position">{edu.degree}</p>
                                </div>
                                <span className="timeline-period">{edu.period}</span>
                            </div>
                            {edu.details.length > 0 && (
                                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-light)', marginTop: '10px' }}>
                                    {edu.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} style={{ marginBottom: '5px' }}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
