import React, { useState } from "react";
import { items } from "./data/data";
import Card from "./Card";
function loadElements(i) {
  return items.slice(i * 9, i * 9 + 9);
}
function Shop({ addItem }) {
  const [page, setPage] = useState(0);
  return (
    <div className="shop">
      <div className="shopItemsHolder">
        {loadElements(page).map((element, id) => {
          return (
            <Card
              name={element.name}
              picture={element.picture}
              price={element.price}
              addItem={addItem}
              key={id}
            ></Card>
          );
        })}
      </div>
      <div className="numbers">
        <button onClick={() => setPage(0)}>1</button>
        <button onClick={() => setPage(1)}>2</button>
      </div>
    </div>
  );
}
export default Shop;
