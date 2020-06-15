import React from 'react'

function ProjectContenu(props) {
    return (
        <div>
            <img src={props.image}/>
            <a href={props.link}>
            <h3>{props.title}</h3>
            </a>
            <p>{props.time}</p>
            <p>{props.competence}</p>
        </div>
    )
}

export default ProjectContenu