import React, { useState } from "react";
import { items } from "./data/data";
import Card from "./Card";
function loadElements(i) {
  return items.slice(i * 9, i * 9 + 9);
}
function Shop() {
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
            ></Card>
          );
        })}
      </div>
      <div className="pageNumbers"></div>
    </div>
  );
}
export default Shop;
