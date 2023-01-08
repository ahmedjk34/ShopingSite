import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
import Cart from "./Components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [elementsInCart, setElementsInCart] = useState(0);
  const [vis, setVis] = useState("hidden");

  function CartManagement() {
    if (vis === "hidden")
      setVis("visible"); //handles cart visibility + animations
    else setVis("hidden");
  }

  function addItem(name, picture, price) {
    setElementsInCart((prev) => prev + 1);
    //flag is for making sure that the elements don't duplicate
    let flag = 1;
    setCart(
      cart.map((element) => {
        if (element.name === name) {
          flag = 0;
          return { ...element, quantity: element.quantity + 1 };
        } else return element;
      })
    );
    //if the element is new , add it
    if (flag)
      setCart((prev) => [
        ...prev,
        { name: name, picture: picture, price: price, quantity: 1 },
      ]);
  }

  //Cart Functionality
  function addItemFromCart(element) {
    setElementsInCart((prev) => prev + 1);
    setCart(
      cart.map((e) =>
        e.name === element.name ? { ...e, quantity: e.quantity + 1 } : e
      )
    );
  }

  function removeItemFromCart(element) {
    //if the quantity is 1 , remove the element
    if (element.quantity === 1)
      setCart(cart.filter((e) => e.name !== element.name));
    //if not , decrease the quantity by 1
    else
      setCart(
        cart.map((e) =>
          e.name === element.name ? { ...e, quantity: element.quantity - 1 } : e
        )
      );
    //always remove an element from the cart
    setElementsInCart((prev) => prev - 1);
  }

  return (
    <BrowserRouter>
      <Cart
        cart={cart}
        add={addItemFromCart}
        remove={removeItemFromCart}
        CartManagement={CartManagement}
        isVisable={vis}
      ></Cart>
      <Nav
        elementsInCart={elementsInCart}
        cart={cart}
        CartManagement={CartManagement}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop addItem={addItem} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
