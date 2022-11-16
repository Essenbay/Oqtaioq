import './ListPage.css';
import React, {useState} from 'react';
import ListBlock from '../../components/ListBlock/ListBlock';
import logo from '../../images/logo.svg'
/* Open Item - function to open a specific item */
function ListPage({items, openItem}) {
  return (
    <div className="ListPage">
        <div className="listpage-header">
          <a href='/' className='header-logo'><img src={logo} alt="Logo" /></a>
        </div>
        <ListBlock />
        <div className="listpage-footer">
          {/* Temporarely */}
          <a href="/read" onClick={()=>openItem(0,1,1)}>to read</a>
        </div>
    </div>
  );
}

export default ListPage;
