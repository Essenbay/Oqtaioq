import './ReadBlock.css';
import React, {useState} from 'react';
function readEmpty(){
    return(
        <div className="read-empty">

        </div>
    )
}

function ReadBlock({readItem}){
    return(
        <div className="read-block">
            This is read block
        </div>
    )
}
export default ReadBlock