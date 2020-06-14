import React from "react"


function expContenu(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <p>{props.time}</p>
            <p>{props.description}</p>
        </div>
    )
    
}
export default expContenu;
