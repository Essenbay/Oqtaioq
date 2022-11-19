import './ReadBlock.css';
import React, {useState} from 'react';
import image from '../../storage/template/volume1/chapter1/1.png'
function ReadBlock({title}){
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(1);
    const [chapter, setChapter] = useState(1);

    const staticPath = "../../storage/template/volume1/chapter1"
    const path = `Reading in ../../storage/${title}/volume${volume}/chapter${chapter}/${page}.png`;


    return(
        <div className="read-block" >            
            <div className="read-content">
                <div className="read-navigate">
                    <button>Artqa</button>
                    <p>{`${title} Tom ${volume} Tarau ${chapter}`}</p>
                    <button>Alğa</button>

                </div>
                <div className="read-page">
                    <img src={image} alt="Page?" />
                </div>
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