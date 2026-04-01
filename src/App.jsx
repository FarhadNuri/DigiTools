import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import HeroBanner from "./Components/Hero/HeroBanner.jsx";
import Stats from "./Components/Statistics/Stats.jsx";
import ProductHeader from "./Components/Products/ProductHeader.jsx";
import Products from "./Components/Products/Products.jsx";
import axios from "axios";
import Footer from "./Components/Footer/Footer.jsx";
import Pricing from "./Components/Pricing/Pricing.jsx";
import Steps from "./Components/Steps/Steps.jsx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const productsPromise = axios.get("/productsData.json");
const pricingPromise = axios.get("/priceData.json");

function App() {
  const [headerBtn, setHeaderBtn] = useState("Products");
  const handleHeaderBtnClick = (btnType) => {
    setHeaderBtn(btnType);
  };
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const cartItem = { ...product, cartItemId: crypto.randomUUID() };
    setCartItems((prevItems) => [...prevItems, cartItem]);
    toast.success("Product added to cart");
  };

  const handleRemoveFromCart = (cartItemId) => {
    const removedItem = cartItems.find((item) => item.cartItemId === cartItemId);
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId),
    );
    toast.info(removedItem ? `${removedItem.title} removed from cart` : "Product removed");
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.success("Purchase complete");
  };

  return (
    <div>
      <Navbar cartItems={cartItems} handleHeaderBtnClick={handleHeaderBtnClick} />
      <HeroBanner />
      <Stats />
      <ProductHeader
        handleHeaderBtnClick={handleHeaderBtnClick}
        cartItems={cartItems}
        headerBtn={headerBtn}
      />
      <Products
        productsPromise={productsPromise}
        headerBtn={headerBtn}
        handleAddToCart={handleAddToCart}
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCheckout={handleCheckout}
      />
      <Steps />
      <Pricing pricingPromise={pricingPromise} />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
