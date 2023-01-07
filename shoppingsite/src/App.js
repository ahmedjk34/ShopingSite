import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
function App() {
  const [cart, setCart] = useState([]);
  const [elementsInCart, setElementsInCart] = useState(0);
  function addItem(name, picture, price) {
    setElementsInCart((prev) => prev + 1);
    setCart((prev) => [
      ...prev,
      { name: name, picture: picture, price: price },
    ]);
    console.log(cart);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Nav elementsInCart={elementsInCart} cart={cart} />}
        ></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop addItem={addItem} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
