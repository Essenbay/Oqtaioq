import './Page.css';
import React, {useState} from 'react';
import ListBlock from '../../components/ListBlock/ListBlock';
import ReadBlock from '../../components/ReadBlock/ReadBlock';
import logo from '../../images/logo.svg'
import menu from '../../images/menu.svg'
import EmptyReadBlock from '../../components/EmptyReadBlock/EmptyReadBlock';
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
      <div className="header">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div className="menu-items" onClick={() => {setListActive(!listActive)}}>
          <img src={menu} alt="menu" />
        </div>
      </div>
      <ListBlock active={listActive}/>
      {
        readItem.item == "" ? <EmptyReadBlock /> : <ReadBlock />
      }
    </div>
  )
}
export default Page;