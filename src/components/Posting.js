import React from "react";

function Posting(props){
    console.log(props)
    return(
    <div>
        <h1>{props.posting.title}</h1>
        <p>{props.posting.description}</p>
        <img src={props.posting.imageURL}/>
    </div>
    )
}

export default Posting