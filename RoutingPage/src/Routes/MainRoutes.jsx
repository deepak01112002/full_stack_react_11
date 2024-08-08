import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Cart from '../Pages/Cart'
import Product from '../Pages/Product'
import PageNotFound from '../Pages/PageNotFound'

function MainRoutes() {
  return (
    <>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/men' element={<Men/>}></Route>
           <Route path='/cart' element={<Cart/>}></Route>
           <Route path='/product' element={<Product/>}></Route>
           <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </>
  )
}

export default MainRoutes