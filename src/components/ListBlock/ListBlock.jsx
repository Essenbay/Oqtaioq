import React, {useState} from 'react';
import './ListBlock.css'

function ListBlock({active}){

    return(
        <div className={active ? "list-block list-block-active" : "list-block"}>
            <h2 className='listblock-header'>Katalog</h2>
            {/* List of items */}
        </div>
    )
}
export default ListBlock