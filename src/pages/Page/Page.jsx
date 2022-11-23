import './Page.css';
import React, {useState} from 'react';
import ListBlock from '../../components/ListBlock/ListBlock';
import ReadBlock from '../../components/ReadBlock/ReadBlock';
import EmptyReadBlock from '../../components/ReadBlock/EmptyReadBlock';
import logo from '../../images/logo.svg'
function Page(){
  const items = [
    {
      id: 0,
      title: 'template'
    },
    {
      id: 1,
      title: 'template2'
    }
  ]
  const [readItem, setReadItem] = useState({item: "", volume: 0, chapter: 0});
  const [listActive, setListActive] = useState(true);

  function handleToRead(itemId, volume, chapter){
    console.log(`Reading title:${items.at(itemId).title} volume: ${volume} chapter:${chapter}`)
    if(itemId >= 0 && itemId < items.length && volume > 0 && chapter > 0){
      setReadItem(prev => ({...prev, 
        item: items.at(itemId),
        volume: volume, 
        chapter: chapter
      }))
    }
  }

  function handleToEmpty(){
    setReadItem(readItem.item = "", readItem.chapter = 0, readItem.volume = 0);

  }

  return(
    <div className="main-page">
      <div className="header">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="menu-items" onClick={() => {setListActive(!listActive)}}>
          <button>Menu</button>
        </div>
      </div>
      <ListBlock active={listActive} toRead={handleToRead}/>
      {
        readItem.item == "" ? <EmptyReadBlock /> : <ReadBlock title={readItem.item.title} toEmpty={handleToEmpty}/>
      }
    </div>
  )
}
export default Page;