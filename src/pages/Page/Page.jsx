import './Page.css';
import React, {useState} from 'react';
import ListBlock from '../../components/ListBlock/ListBlock';

function Page(){
  const items = [
    {
      id: 0,
      title: "template"
    }
  ]
  const [readItem, setReadItem] = useState({item: "", volume: 0, chapter: 0});
  const [listActive, setListActive] = useState(false);
  
  function handleToRead(itemId, volume, chapter){
    if(itemId >= 0 && itemId < items.length && volume > 0 && chapter > 0){
      setReadItem(prev => ({...prev, 
        item: items.at(itemId),
        volume: volume, 
        chapter: chapter
      }))
    }
    console.log(`Reading ${readItem.item} ${readItem.volume} ${readItem.chapter}`)
  }

  return(
    <div className="main-page">
      <div className="header"></div>
      <ListBlock active={listActive}/>
    </div>
  )
}
export default Page;