import './Page.css';
import React, {useState} from 'react';
import ListBlock from '../../components/ListBlock/ListBlock';
import ReadBlock from '../../components/ReadBlock/ReadBlock';
import EmptyReadBlock from '../../components/ReadBlock/EmptyReadBlock';
import logo from '../../images/logo.svg'
import storage from '../../storage/storage';
import menu from '../../images/menu.svg'
function Page(){
  const items = [
    {
      id: 0,
      title: 'template',
      image: storage.preview[1]
    },
    {
      id: 1,
      title: 'template2',
      image: storage.preview[2]
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
          <img src={menu} onClick={() => {setListActive(!listActive)}} className="imageMenu" />
      </div>
      <ListBlock active={listActive} toRead={handleToRead} items={items}/>
      {
        readItem.item == "" ? <EmptyReadBlock /> : <ReadBlock title={readItem.item.title} toEmpty={handleToEmpty}/>
      }
    </div>
  )
}
export default Page;