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
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.cartItemId !== cartItemId),
    );
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
      />
      <Steps />
      <Pricing pricingPromise={pricingPromise} />
      <Footer />
    </div>
  );
}

export default App;
