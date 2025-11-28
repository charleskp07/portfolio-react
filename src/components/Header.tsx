import { useState } from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Expérience', href: '#experience' },
        { name: 'Formation', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#home" className="logo">KPALIKA Yaovi Charles</a>

                    <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="nav-link"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </nav>
            </div>
        </header>
    );
}
