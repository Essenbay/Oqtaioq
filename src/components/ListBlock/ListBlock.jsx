import React, {useState} from 'react';
import './ListBlock.css'

function ListBlock({active, toRead, items}){
    return(
        <div className={active ? "list-block list-block-active" : "list-block"}>
            <div className="list-item">
                <img src={items[1].image} width={250} height={250}/>
                
                    <h2>First Manga</h2>
                
            </div>
            <button onClick={()=>{toRead(0,1,1)}}>Read "Template"</button>
            {/* List of items */}
        </div>
    )
}
export default ListBlock