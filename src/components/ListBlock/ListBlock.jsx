import React, {useState} from 'react';
import './ListBlock.css'

function ListBlock({active}){

    return(
        <div className={active ? "list-block list-block-active" : "list-block"}>
            This is list block
            {/* List of items */}
        </div>
    )
}
export default ListBlock