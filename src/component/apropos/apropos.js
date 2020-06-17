import React from "react";

import profilePic from "./profile.png";

import "./apropos.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-title-container">
        <div className="about-title">
          <h1>WALLART--JOUBERT Aurélien</h1>
          <h3>Développeur Web</h3>
          <h3>ReactJS-NodeJS</h3>
        </div>
        <img className="about-profile-pic" alt="" src={profilePic} />
      </div>

      <div className="about-description">
        <p> 
          Je suis un ancien Opérateur-Régleur,Formateur et Remplaçant chef
          d'équipe chez Vygon.
        </p>
        <p>
          Dans cette entreprise j'ai appris à gérer une équipe de 30 personnes
          et à travailler ma pédagogie pour apprendre aux autres.
        </p>
        <p>
          Après 4 ans passées chez Vygon j'ai décidé de changer de voie je suis
          donc aujourd'hui Développeur Web et Mobile
        </p>
        <p>Me contacter : aurelien.joubert01@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
