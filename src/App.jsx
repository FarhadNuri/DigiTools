import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import HeroBanner from './Components/Hero/HeroBanner.jsx'
import Stats from './Components/Statistics/Stats.jsx'
import ProductHeader from './Components/Products/ProductHeader.jsx'
import ProductCard from './Components/Products/ProductCard.jsx'
import Products from './Components/Products/Products.jsx'
import axios from 'axios'
const productsPromise = axios.get('/productsData.json')


function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Stats  />
      <ProductHeader />
      <Products productsPromise={productsPromise} />
    </div>
  )
}

export default App
