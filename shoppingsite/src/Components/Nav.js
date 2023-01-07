import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import logo from "./images/cartLogo.svg";
function Nav(props) {
  const [vis, setVis] = useState(false);
  function CartManagement() {
    if (vis) setVis(false); //if true
    else setVis(true);
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
        </button>
        <Cart cart={props.cart} isVisable={vis}></Cart>
      </div>
    </div>
  );
}
export default Nav;
