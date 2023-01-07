import React from "react";
function Card({ name, picture, price }) {
  console.log(picture);
  return (
    <div className="card">
      <img src={require(`${picture}`)}></img>
      <br></br>
      <h1>{name}</h1>
      <h4>{price}</h4>
      <div className="cardOverlay">
        <h2>Add to Cart</h2>
        <h2>+</h2>
      </div>
    </div>
  );
}
export default Card;
