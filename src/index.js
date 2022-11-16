import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ListPage from './pages/ListPage/ListPage';
import ReadPage from './components/ReadPage/ReadPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
let Page;
switch(window.location.pathname) {
  case "/":
    Page = ListPage; break;
  case "/read":
    Page = ReadPage; break;
  default: 
    Page = ListPage; break;
}


const openItem = (itemId, name, volume, chapter)=>{
  console.log(`Reading ${itemId}`)
}

root.render(
  <React.StrictMode>
    <Page openItem={openItem}/>
  </React.StrictMode>
);

reportWebVitals();
