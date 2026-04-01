import React from "react";
import { use } from "react";
import ProductCard from "./ProductCard.jsx";
import { useState } from "react";
import ProductCart from "./ProductCart.jsx";
const btnRes = true;
function Products({
  productsPromise,
  headerBtn,
  handleAddToCart,
  cartItems,
  handleRemoveFromCart,
}) {
  const products = use(productsPromise);
  const productsData = products.data;

  
  
  return (
    <div>
      {headerBtn === "Cart" ? (
        <ProductCart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ) : (
        <ProductCard
          productsData={productsData}
          handleAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}

export default Products;
