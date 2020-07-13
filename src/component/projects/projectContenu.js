import React from 'react'
import "./projectContenu.css"

function ProjectContenu(props) {
    return (
        <div className="projectcontainer2">
            <img className="projectimg" alt="" src={props.image}/>
            <div className="project">
            <a href={props.link}>
            <h3>{props.title}</h3>
            </a>
            <div className="blabla">
            <p>{props.time}</p>
            <div className="iconcontainer">
            <img className="icon-competence" alt="" src={props.competence}/>
            <img className="icon-competence" alt="" src={props.competence2}/>   
            <img className="icon-competence" alt="" src={props.competence3}/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ProjectContenu