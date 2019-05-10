import React from "react";

const Bernies = props => {
    <div className="card">
    <img className src={props.image} alt={props.name} onClick={() => props.clickBern(props.id)}/>
    </div>
}

export default Bernies;