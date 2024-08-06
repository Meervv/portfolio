"use client";

import '../../styles/skillCard.css';

import CardSkill from "@/components/customs/CardSkill";
  
export default function Skills() {
    return (
        <>
            <div className="skills-info">
                <h1>Skills</h1>
                <div className='wrapper'>
                    <CardSkill text='Next.js' image='/images/nextjs.png'/>
                    <CardSkill text='Node.js' image='/images/nodejs.png'/>
                    <CardSkill text='React.js' image='/images/reactjs.png'/>
                    <CardSkill text='Symfony' image='/images/symfony.png'/>
                    <CardSkill text='MySQL' image='/images/mysql.png'/>
                    <CardSkill text='Linux Mint' image='/images/linux.png'/>
                    <CardSkill text='Git' image='/images/git.png'/>
                    <CardSkill text='Docker' image='/images/docker.svg'/>
                    <CardSkill text='Webflow' image='/images/webflow.png'/>
                </div>
            </div>
        </>
    )
}
