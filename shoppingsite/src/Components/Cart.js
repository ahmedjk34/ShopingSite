import React from "react";
function Cart({ cart, isVisable }) {
  function addClass() {
    if (isVisable === "hidden") return "";
    return "slide";
  }
  return (
    <div className={`cart ${addClass()}`}>
      <h1>Your Cart</h1>
      {cart.map((element, index) => (
        <div className="cartElement">
          <img src={require(`${element.picture}`)}></img>
          <div>
            <h2>{element.name}</h2>
            <h4>{element.price}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Cart;
