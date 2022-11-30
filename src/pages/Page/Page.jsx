import "./Page.css";
import React, { useEffect, useState } from "react";
import ListBlock from "../../components/ListCatalog/ListCatalog";
import ReadBlock from "../../components/ReadBlock/ReadBlock";
import EmptyReadBlock from "../../components/ReadBlock/EmptyReadBlock";
import logo from "../../images/logo.svg";
import storage from "../../storage/storage";
import menu from "../../images/menu.svg";
import exit from "../../images/exit.svg";
import Login from "../../components/Login/Login";

function Page() {
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(savedUser ? JSON.parse(savedUser) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const [loginActive, setLoginActive] = useState(false);
  const items = [
    {
      id: 0,
      title: "template",
      image: storage.preview[1],
      catalog: "Shaikas",
    },
    {
      id: 1,
      title: "template2",
      image: storage.preview[2],
      catalog: "Kundelikti",
    },
  ];
  const filteredItem = items;
  const [readItem, setReadItem] = useState({ item: "", volume: 0, chapter: 0 });
  const [listActive, setListActive] = useState(true);

  function handleToRead(itemId, volume, chapter) {
    console.log(
      `Reading title:${
        items.at(itemId).title
      } volume: ${volume} chapter:${chapter}`
    );
    if (itemId >= 0 && itemId < items.length && volume > 0 && chapter > 0) {
      setReadItem((prev) => ({
        ...prev,
        item: items.at(itemId),
        volume: volume,
        chapter: chapter,
      }));
    }
  }

  function handleToEmpty() {
    setReadItem(
      (readItem.item = ""),
      (readItem.chapter = 0),
      (readItem.volume = 0)
    );
  }

  function handleLogout() {
    setLoginActive(true);
    setUser(null);
  }

  return (
    <div className="main-page">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header-button-group">
          <img
            src={menu}
            onClick={() => {
              setListActive(!listActive);
            }}
            className="imageMenu"
          />

          <span>{user}</span>

          <img src={exit} alt="Logout" onClick={handleLogout} />
        </div>
      </div>

      <ListBlock active={listActive} toRead={handleToRead} items={items} />
      {readItem.item == "" ? (
        <EmptyReadBlock />
      ) : (
        <ReadBlock title={readItem.item.title} toEmpty={handleToEmpty} />
      )}

      <Login
        active={loginActive}
        setActive={setLoginActive}
        setUser={setUser}
      />
    </div>
  );
}
export default Page;
