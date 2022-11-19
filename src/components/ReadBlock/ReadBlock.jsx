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
            <div className="read-content">
                This is read block
            </div>
            <div className="read-footer">
                <button>Artqa</button>
                Bet
                <button>Alğa</button>
            </div>
        </div>
    )
}
export default ReadBlock