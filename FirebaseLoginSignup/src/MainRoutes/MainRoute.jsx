import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import AddProduct from '../Components/AddProduct'
import Product from '../Components/Product'
import SingleEditProduct from '../Components/SingleEditProduct'

function MainRoute() {
  return (
     <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/addProduct' element={<AddProduct/>}></Route>
          <Route path='/products' element={<Product/>}></Route>
          <Route path='/products/edit/:id' element={<SingleEditProduct/>}></Route>
     </Routes>
     
  )
}

export default MainRoute