import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav.js";
import Home from "./Components/Home.js";
import Shop from "./Components/Shop.js";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Nav cart={cart} />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop setCart={setCart} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
