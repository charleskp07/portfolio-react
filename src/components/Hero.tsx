

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="container">
                <h1 className="hero-title">KPALIKA Yaovi Charles</h1>
                <p className="hero-subtitle">Développeur Web & Mobile Full-Stack</p>
                <p className="hero-description">
                    Passionné par la création d'applications modernes et innovantes.
                    Je recherche un stage pour mettre en pratique mes compétences en
                    développement front-end et back-end.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn">Me Contacter</a>
                    <a
                        href="https://github.com/charleskp07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        Voir GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
