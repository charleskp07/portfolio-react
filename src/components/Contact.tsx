
export default function Contact() {
    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div className="card">
                        <h3 className="skills-category-title">Coordonnées</h3>
                        <div className="contact-info">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <a href="mailto:charlesyaovikp@gmail.com" className="contact-link">
                                charlesyaovikp@gmail.com
                            </a>
                        </div>
                        <div className="contact-info">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <a href="tel:+22893728319" className="contact-link">
                                +228 93 72 83 19
                            </a>
                        </div>
                        <div className="contact-info">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span className="contact-link">Bè-Klouvi, Lomé, Togo</span>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="skills-category-title">Liens & Langues</h3>
                        <div className="contact-info">
                            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <a
                                href="https://github.com/charleskp07/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                GitHub
                            </a>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Langues</h4>
                            <div style={{ color: 'var(--text-light)' }}>
                                <p style={{ marginBottom: '8px' }}>🇫🇷 Français : Très bon niveau</p>
                                <p>🇬🇧 Anglais : Niveau scolaire</p>
                            </div>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Centres d'intérêt</h4>
                            <div style={{ color: 'var(--text-light)' }}>
                                <p>Photographie, basketball, manga, technologie</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
