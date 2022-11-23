import './ReadBlock.css';
import React, {useState} from 'react';
import storage from '../../storage/storage';
import next from '../../images/next.svg';
import back from '../../images/back.svg'

function ReadBlock({title, toEmpty, comments}){
    const [page, setPage] = useState(1);
    const [volume, setVolume] = useState(1);
    const [chapter, setChapter] = useState(1);

    const pageName = `volume${volume}_chapter${chapter}_page${page}`
    const currPageImg = storage[title][`volume${volume}`][`chapter${chapter}`][`page${page}`];
    const volumeLen = Object.keys(storage[title]).length
    const chapterLen = Object.keys(storage[title][`volume${volume}`]).length;
    const pageLen = Object.keys(storage[title][`volume${volume}`][`chapter${chapter}`]).length;
    const prevPage = () => {
        if(page == 1){
            prevChapter();
        } else{
            setPage(page - 1);
        }

    }
    const nextPage = () => {
        if(page == pageLen){
            nextChapter()
        } else{
            setPage(page + 1);
        }
    }
    const prevChapter = () => {
        if(chapter == 1){
            if(volume == 1){
                window.location.reload();
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
    }
    const nextChapter = () => {
        if(chapter == chapterLen){
            if(volume == volumeLen){
                window.location.reload();
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
    }
    return(
        <div className="read-block" >
            <div className="read-content">
                <div className="read-navigate">
                    <img src={back} onClick={prevChapter} className="imageBack" />
                    <p>{`${title} Tom ${volume} Tarau ${chapter}`}</p>
                    <img src={next} onClick={prevChapter} className="imageNext" />

                </div>
                <div className="read-page">
                    <img src={currPageImg} alt="Page?" />
                </div>
            </div>
            <div className="read-footer">
                <img src={back} onClick={prevPage} className="imageBack" />
                Bet {page} / {pageLen}
                <img src={next} onClick={nextPage} className="imageNext" />
            </div>
            <div className="comment-section">
                {console.log(comments[0].username)}
            </div>
        </div>
    )
}
export default ReadBlock