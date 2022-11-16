import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListPage from './pages/ListPage/ListPage';
import ReadPage from './components/ReadPage/ReadPage';
import previewTemplate from '../src/storage/preview/template.png'

const root = ReactDOM.createRoot(document.getElementById('root'));

const srcTemp = "../src/storage/preview/";
const items = [
    {
      id: 0,
      title: "template",
      getPreview: function(){
        return `${srcTemp}${this.title}.png`;
      },
      getTitle: function(){
        return this.title;
      }

    }]



const openPage = ()=>{
  const openItem = (itemId, volume, chapter)=>{
    const targetPathTemp = `../../storage/`
    const targetPath = `${targetPathTemp}/volume${volume}/chapter${chapter}`
    const item = items[0];
    // console.log(`Reading ${item.title}. Volume ${volume}, Chapter ${chapter} in ${targetPath}`)
    return(
      <ReadPage targetPath={targetPath} title={item.getTitle} volume={volume} chapter={chapter}/>
    );
  }
  let Page;
  switch(window.location.pathname) {
    case "/":
      return <ListPage items={items} openItem={openItem}/>
    case "/read":
      return openItem();break;
    default: 
      return <ListPage />
  }
}

root.render(
  <React.StrictMode>
    {openPage()}
  </React.StrictMode>
);

reportWebVitals();
