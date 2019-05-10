import React from "react";

const BernieCard = props => (
    <div className="card">
        <div className="img-container">
                <img src={props.image} alt={props.id} onClick={() => props.handlePick(props.id)} />
        </div>
    </div>
)

export default BernieCard;