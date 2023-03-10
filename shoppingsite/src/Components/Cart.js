import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Cart({ cart, add, remove, CartManagement, isVisable }) {
  const [total, setTotal] = useState(0);
  const navigation = useNavigate();
  function addClass() {
    if (isVisable === "hidden") return "";
    return "slide";
  }
  useEffect(() => {
    setTotal(0);
    cart.forEach(
      (element) =>
        setTotal((prev) => prev + element.price.slice(0, -1) * element.quantity) //slice => to remove the last character from the price ($ sign)
    );
    setTotal((prev) => prev.toFixed(2)); //two decimal places
  }, [cart]);
  return (
    <div className={`cart ${addClass()}`}>
      <h1>Your Cart</h1>
      {cart.map((element, index) => (
        <div className="cartElement" key={index}>
          <img src={require(`${element.picture}`)}></img>
          <div>
            <div>
              <h1>{element.name}</h1>
              <h4>{element.price}</h4>
            </div>
            <div className="cartNumbers">
              <button onClick={() => add(element)}>+</button>
              <h4>{element.quantity}</h4>
              <button onClick={() => remove(element)}>-</button>
            </div>
          </div>
        </div>
      ))}
      <div className="cartFooter">
        <h3>Total Price : {total}$</h3>
        <button
          onClick={() => {
            /*
            used the navigation hook to be able to navigate 
            inside the function , reloaded to empty the cart
            */
            navigation("/");
            CartManagement();
            setTimeout(() => {
              window.location.reload();
            }, 400);
          }}
        >
          Checkout
        </button>
        <button onClick={CartManagement}>Close</button>
      </div>
    </div>
  );
}
export default Cart;
