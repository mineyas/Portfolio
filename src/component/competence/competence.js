import React from 'react'

import "./competence.css"

import html from "./html.png";
import css from "./css.png";
import mysql from "./mysql.png";
import nodejs from "./nodejs.png";
import react from "./react.png";
import github from "./github.png";
import js from "./javascript.png"



const Competence = () => {
    return (
        <div>
        <h1>Compétences</h1>
        <img className="competence-icon" alt="" src={html} />
        <img className="competence-icon" alt="" src={css} />
        <img className="competence-icon" alt="" src={mysql} />
        <img className="competence-icon" alt="" src={nodejs} />
        <img className="competence-icon" alt="" src={react} />
        <img className="competence-icon" alt="" src={github} />
        <img className="competence-icon" alt="" src={js} />
        </div>

    )
}

export default Competence