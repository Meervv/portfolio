"use client";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { TypeAnimation } from 'react-type-animation';
import '../../styles/card.css';

export default function Presentation() {
    return (
        <div className="presentation">
            <div className="presentation_content">
                <img src="/images/moi.jpg" alt="Marvine Gaudrée" />
                <h1>Marvine Gaudrée</h1>
                <div className="position">
                    <LocationOnIcon />
                    Vernon (27), France
                </div>
                <div className="skills">
                    <WorkIcon />
                    <TypeAnimation 
                        sequence={[
                            'Next.js', 1000,
                            'React.js', 1000,
                            'Node.js', 1000,
                            'Symfony', 1000,
                            'TypeScript', 1000,
                            'MySQL', 1000
                        ]}
                        repeat={Infinity}
                        speed={50}
                    />
                </div>
                <p>
                    Je suis un développeur web fullstack, et je prépare un Master Expert en Technologie de l'Information, à <a className="linked" href="https://yutopia.io/">Yutopia</a>. 
                    Je recherche un contrat d'alternance de 12 ou 24 mois pour la rentrée 2024, avec pour rythme 3 semaines en entreprise / 1 semaine en formation.
                </p>
            </div>
        </div>
    )
}