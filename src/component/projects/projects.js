import React from 'react'
import ProjectContenu from './projectContenu'

const Project = () => {
    return (
        <div>
            <h1>Projets</h1>
            <ProjectContenu 
            image="https://via.placeholder.com/150"
            link="https://phila10.github.io/Projet1PAW/"
            title="Projet PAW @WildCodeSchool"
            time="1 semaine"
            competence="HTML-CSS-GIT"
            />
             <ProjectContenu 
            image="https://via.placeholder.com/150"
            link="https://cookandcake.netlify.app/"
            title="Projet CookAndCake @WildCodeSchool"
            time="5 semaines"
            competence="ReactJS-CSS-GIT-API-SCRUM"
            />
             <ProjectContenu 
            image="https://via.placeholder.com/150"
            link=""
            title="Projet VenteDesign"
            time="8 semaines(En cours...)"
            competence="ReactJS-CSS-API"
            />
            <ProjectContenu 
            image="https://via.placeholder.com/150"
            link="https://master--elegant-hypatia-f05ed3.netlify.app"
            title="Hackaton #1 : CovidRun @WildCodeSchool"
            time="24 heures"
            competence="ReactJS-CSS-API"
            />
            <ProjectContenu 
            image="https://via.placeholder.com/150"
            link="https://master--elegant-hypatia-f05ed3.netlify.app"
            title="Hackaton #2 :  @WildCodeSchool"
            time="48 heures(À venir)"
            competence=""
            />
           
        </div>
    )
}
export default Project