

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">À Propos</h2>
                <div className="grid grid-2">
                    <div className="card">
                        <h3 className="skills-category-title">Informations Personnelles</h3>
                        <div className="contact-info" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
                            <div><strong>Nom :</strong> KPALIKA Yaovi Charles</div>
                            <div><strong>Date de naissance :</strong> 17 juillet 2003</div>
                            <div><strong>Lieu :</strong> Niamtougou, Togo</div>
                            <div><strong>Adresse :</strong> Bè-Klouvi, Lomé, Togo</div>
                            <div><strong>Téléphone :</strong> +228 93 72 83 19</div>
                            <div><strong>Email :</strong> charlesyaovikp@gmail.com</div>
                            <div><strong>Nationalité :</strong> Togolaise</div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="skills-category-title">Objectif Professionnel</h3>
                        <p style={{ marginBottom: '20px', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            Développeur Web et Mobile junior passionné par la création d'applications modernes.
                            Je recherche un stage de développeur web ou mobile afin de mettre en pratique mes
                            connaissances en front-end et back-end et d'évoluer au sein d'une équipe professionnelle.
                        </p>
                        <div>
                            <h4 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Qualités Personnelles</h4>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: 'var(--text-light)' }}>
                                <li>Sens de l'organisation</li>
                                <li>Autonomie et motivation</li>
                                <li>Esprit d'équipe</li>
                                <li>Curiosité et apprentissage rapide</li>
                                <li>Adaptabilité</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
