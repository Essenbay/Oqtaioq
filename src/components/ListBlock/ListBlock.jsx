import React, {useState} from 'react';
import ListItem from '../ListItem/ListItem';
import './ListBlock.css'

function ListBlock({active, toRead, items}){
    return(
        <div className={active ? "list-block list-block-active" : "list-block"}>
            <ListItem item={items[0]} toRead={toRead} /> 
            <ListItem item={items[1]} toRead={toRead} />  
        </div>
    )
}
export default ListBlock