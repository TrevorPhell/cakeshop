import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import AboutUs from "./pages/about";
import Contact from "./pages/contact";
import LoginSignUp from "./pages/loginsignup";
import NotFound from "./pages/not-found";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path=":productsId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user-auth" element={<LoginSignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
