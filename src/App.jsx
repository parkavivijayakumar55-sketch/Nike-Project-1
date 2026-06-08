import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Signup from "./pages/SignUp.jsx";
import Home from "./pages/Home";

import ProductList from "./components/ProductList";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>

      <Routes>

        {/* AUTH */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* HOME */}
        <Route path="/home" element={<Home />} />

        {/* CATEGORY SYSTEM */}
        
        <Route
  path="/men"
  element={<ProductList type="men" cart={cart} setCart={setCart} />}
/>
        <Route
  path="/women"
  element={<ProductList type="women" cart={cart} setCart={setCart} />}
/>
        <Route
  path="/kids"
  element={<ProductList type="kids" cart={cart} setCart={setCart} />}
/>  

        {/* CART */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;