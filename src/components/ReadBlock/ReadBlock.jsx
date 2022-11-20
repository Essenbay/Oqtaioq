import './ReadBlock.css';
import React, {useState} from 'react';
import items from '../../storage/storage';
import image from '../../storage/template/volume1/chapter1/1.png'
function ReadBlock({title, toEmpty}){
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(1);
    const [chapter, setChapter] = useState(1);

    const pageName = `volume${volume}_chapter${chapter}_page${page}`
    const currPageImg = items[title][`volume${volume}`][`chapter${chapter}`][`page${page}`];
    const volumeLen = Object.keys(items[title]).length
    const chapterLen = Object.keys(items[title][`volume${volume}`]).length;
    const pageLen = Object.keys(items[title][`volume${volume}`][`chapter${chapter}`]).length;
    const prevPage = () => {
        if(page == 1){
            if(chapter == 1){
                if(volume == 1){
                    console.log("To empty")
                    toEmpty();
                } else {
                    console.log("To prev volume");
                    setVolume(volume - 1);
                    setChapter(chapterLen);
                    setPage(pageLen);
                }
            }
            else{
                console.log("To prev chapter");
                setChapter(chapter - 1);
                setPage(pageLen);
            }
        } else{
            setPage(page - 1);
        }

    }
    const nextPage = () => {
        if(page == pageLen){
            if(chapter == chapterLen){
                if(volume == volumeLen){
                    toEmpty();
                    console.log("To empty")
                } else {
                    console.log("To next volume");
                    setVolume(volume + 1);
                    setChapter(1);
                    setPage(1);
                }
            }
            else{
                console.log("To next chapter");
                setChapter(chapter + 1);
                setPage(1);

            }
        } else{
            setPage(page + 1);
        }

    }
    return(
        <div className="read-block" >
            <div className="read-content">
                <div className="read-navigate">
                    <button>Artqa</button>
                    <p>{`${title} Tom ${volume} Tarau ${chapter}`}</p>
                    <button>Alğa</button>

                </div>
                <div className="read-page">
                    <img src={currPageImg} alt="Page?" />
                </div>
            </div>
            <div className="read-footer">
                <button onClick={prevPage}>Artqa</button>
                Bet {page} / {pageLen}
                <button onClick={nextPage}>Alğa</button>
            </div>
        </div>
    )
}
export default ReadBlock