"use client";

import ContrastIcon from '@mui/icons-material/Contrast';
import { toggleDarkMode } from '../../utils/darkmode';
import '../../styles/nav.css';

export default function Navbar() {
    return (
        <nav>
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
                    <li className='darkmode'>
                        <button onClick={toggleDarkMode}>
                            <ContrastIcon />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}