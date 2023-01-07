import React from "react";
function Card({ name, picture, price, addItem }) {
  return (
    <div className="card">
      <img src={require(`${picture}`)}></img>
      <br></br>
      <h1>{name}</h1>
      <h4>{price}</h4>
      <div
        className="cardOverlay"
        onClick={() => addItem(name, picture, price)}
      >
        <h2>Add to Cart</h2>
        <h2>+</h2>
      </div>
    </div>
  );
}
export default Card;
