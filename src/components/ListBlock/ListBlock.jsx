import React, {useState} from 'react';
import './ListBlock.css'

function ListBlock({active, toRead, items}){

    return(
        <div className={active ? "list-block list-block-active" : "list-block"}>
            <img src={items[0].image} alt="" />
            <button onClick={()=>{toRead(0,1,1)}}>Read "Template"</button>
            {/* List of items */}
        </div>
    )
}
export default ListBlock