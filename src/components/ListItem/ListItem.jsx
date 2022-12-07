import "./ListItem.css";
import React, { useState } from "react";

function ListItem({ item, toRead }) {
  return (
    <div
      className="listItem"
      onClick={() => {
        toRead(item.id, 1, 1);
      }}
    >
      <img src={item.image} className="imagePreview" />
      <h2>{item.title}</h2>
    </div>
  );
}

export default ListItem;
