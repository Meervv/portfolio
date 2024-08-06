"use client";

import ContrastIcon from '@mui/icons-material/Contrast';
import MenuIcon from '@mui/icons-material/Menu'; // Icône du menu hamburger
import { toggleDarkMode } from '../../utils/darkmode';
import '../../styles/nav.css';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <button className="menu-toggle" onClick={handleMenuToggle}>
                <MenuIcon />
            </button>
            <div className="navbar">
                <ul>
                    <li className="brand">
                        <a href="/">Meervv</a>
                    </li>
                    <li>
                        <a href="/skills">Compétences</a>
                    </li>
                    <li>
                        <a href="/experience">Expériences</a>
                    </li>
                    <li>
                        <a href="/education">Education</a>
                    </li>
                    <li>
                        <a href="/projects">Projets</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <div className="darkmode">
                    <button onClick={toggleDarkMode}>
                        <ContrastIcon />
                    </button>
                </div>
            </div>
        </nav>
    );
}
