import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import HeroBanner from './Components/Hero/HeroBanner.jsx'
import Stats from './Components/Statistics/Stats.jsx'
import ProductHeader from './Components/Products/ProductHeader.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Stats  />
      <ProductHeader />
    </div>
  )
}

export default App
