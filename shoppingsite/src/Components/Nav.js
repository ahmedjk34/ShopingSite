import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import logo from "./images/cartLogo.svg";
function Nav({ elementsInCart, cart }) {
  const [vis, setVis] = useState("hidden");
  function CartManagement() {
    if (vis === "hidden") setVis("visible"); //if true
    else setVis("hidden");
  }

  return (
    <div className="nav">
      <h2>Logo</h2>
      <div>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <NavLink to="/shop" className="links">
          Shop
        </NavLink>
        <button onClick={CartManagement}>
          <img src={logo} alt="Cart"></img>
          <p
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              color: "red",
              bottom: "-2px",
              background: "white",
              borderRadius: "1rem",
              fontSize: "medium",
            }}
          >
            {elementsInCart}
          </p>
        </button>
        <Cart cart={cart} isVisable={vis}></Cart>
      </div>
    </div>
  );
}
export default Nav;
