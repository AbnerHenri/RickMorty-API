import React from "react";

function Card(props){
    return(
        <div className="Card" id={props.id}>
            <div className="Image"><img alt={props.name} src={props.image}></img></div>

            <div className="Text">
                <h4>{props.name}</h4>
                <h4><img alt='species' className="Icon" src='../Assets/phylogenetics.png'></img>{props.species} - {props.status}</h4>
            </div>
        </div>
    )
}

export default Card;