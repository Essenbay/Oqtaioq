import React, {useState} from 'react';
import './ListBlock.css'
import image12 from '../Rectangle_1.png'

function ListBlock({active, toRead}){

    return(
        <div className={active ? "list-block list-block-active" : "list-block"}>
            This is list block
            <div src="image12" onClick={()=>{toRead(0,1,1)}}></div>
            {/* List of items */}
        </div>
    )
}
export default ListBlock