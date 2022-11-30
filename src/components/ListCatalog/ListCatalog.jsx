import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./ListCatalog.css";

function ListBlock({ active, toRead, items, filter }) {
  let curCatalog = "All";
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

  function filterCatalog(catalogTitle) {
    curCatalog = catalogTitle;
  }

  function localFilter(item) {
    if (curCatalog == "All") {
      console.log("true");

      return true;
    } else if (curCatalog == item.catalog) {
      console.log("true");
      return true;
    } else {
      console.log("false");

      return false;
    }
  }

  function showFilterCatalog() {}

  return (
    <div className={active ? "list-block list-block-active" : "list-block"}>
      {catalogs.map((catalog) => {
        return (
          <button
            className="catlog"
            onClick={() => filterCatalog(catalog.title)}
          >
            {catalog.title}
          </button>
        );
      })}
      {items.filter(localFilter).map((item) => {
        return <ListItem item={item} toRead={toRead} />;
      })}
    </div>
  );
}
export default ListBlock;
