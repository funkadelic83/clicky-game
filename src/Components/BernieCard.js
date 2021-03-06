import React from "react";


//EACH BERNIECARD HAS AN IMAGE AND ID. IT ALSO CALLS handlePick (SENDING ITS CORRESPONDING ID PROPERTY) WHEN CLICKED.
const BernieCard = props => (
    <div>
        <img src={props.image} alt={props.id} onClick={() => props.handlePick(props.id)} />
    </div>
)

//exports BernieCard so App can use it.
export default BernieCard;