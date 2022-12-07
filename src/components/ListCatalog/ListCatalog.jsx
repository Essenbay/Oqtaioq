import React, { useState } from "react";
import { useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import "./ListCatalog.css";

function ListCatalog({ active, toRead, items }) {
  const [showedItems, setShowedItems] = useState(items);
  const catalogs = [
    {
      title: "All",
    },
    {
      title: "Shaikas",
    },
    {
      title: "Kundelikti",
    },
  ];

  function filterItems(genre) {
    setShowedItems(
      items.filter((item) => item.genre == genre || genre == "All")
    );
  }

  useEffect(() => {
    console.log(items);
  }, []);

  useEffect(() => {
    console.log(showedItems);
  }, [showedItems]);

  return (
    <div className={active ? "list-block list-block-active" : "list-block"}>
      {catalogs.map((genre) => {
        return (
          <button className="catlog" onClick={() => filterItems(genre.title)}>
            {genre.title}
          </button>
        );
      })}
      {showedItems.map((item) => {
        return <ListItem item={item} toRead={toRead} />;
      })}
    </div>
  );
}
export default ListCatalog;
