import React from "react"


function expContenu(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.title}</h3>
            <p>{props.time}</p>
            <p>{props.description}</p>
        </div>
    )
    
}
export default expContenu;
