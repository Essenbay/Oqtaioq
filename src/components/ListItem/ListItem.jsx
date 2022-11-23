import './ListItem.css';
import React, {useState} from 'react';

function ListItem({item, toRead}){
    return(
        <div className="list-item" onClick={()=>{toRead(item.id,1,1)}}>
            <img src={item.image} width={250} height={250}/>
            <h2>{item.title}</h2>
        </div>
    )
}

export default ListItem