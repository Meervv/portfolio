"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "../../styles/skillCard.css";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);

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