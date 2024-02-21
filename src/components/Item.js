import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [li, setLi] = useState(false)
  function addItem(){
    setLi(!li)
  }
  return (
    <li className= {li === false ? '' : 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addItem} className="add">{ li === false ? 'Add to Cart' : 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
