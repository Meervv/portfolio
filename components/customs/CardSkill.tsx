"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import "../../styles/skillCard.css";
interface CardSkillProps {
    text: string;
    image: string;
}

export default function CardSkill({ text, image }: CardSkillProps) {
    return (
        <Card sx={{ width: 220 }}>
            <CardContent>
                <div className='skills-card'>
                    <img src={image} alt="skill"/>
                    <h2>{text}</h2>
                </div>
            </CardContent>
        </Card>
    );
}