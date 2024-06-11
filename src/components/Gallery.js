import React from "react";
import Posting from "./Posting";
import {postings} from "../postings"

function Gallery() {
    return (
        <div className="gallery">
            {postings.map((posting) => {
                return (
                    <div>
                        <Posting posting={posting}/>
                    </div>
                )    
            })}
        </div>
    )
}

export default Gallery