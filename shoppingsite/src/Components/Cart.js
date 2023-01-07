import React from "react";
function Cart({ cart, isVisable }) {
  function addClass() {
    if (isVisable === "hidden") return "";
    return "slide";
  }
  return (
    <div
      className={`cart ${addClass()}`}
      style={{ visibility: isVisable }}
    ></div>
  );
}
export default Cart;
