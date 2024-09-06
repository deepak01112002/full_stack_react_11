import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/Product'
import SingleProduct from './Components/SingleProduct'

function App() {
  

  return (
    <>
      <Product/>
      <h1>Single Product</h1>
      <SingleProduct/>
    </>
  )
}

export default App
