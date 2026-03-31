import React from 'react'
import { use } from 'react'
import ProductCard from './ProductCard.jsx'
function Products({ productsPromise }) {
    const products = use(productsPromise);
    const productsData = products.data;
    console.log(productsData);
  return (
    <div>
      <ProductCard productsData={productsData} />
    </div>
  )
}

export default Products
