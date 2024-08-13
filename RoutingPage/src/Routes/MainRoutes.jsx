import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Men from '../Pages/Men'
import Cart from '../Pages/Cart'
import Product from '../Pages/Product'
import PageNotFound from '../Pages/PageNotFound'
import SingleProduct from '../Pages/SingleProduct'
import Edit from '../Pages/Edit'
import PrivateRoute from '../Pages/PrivateRoute'

function MainRoutes() {
  return (
    <>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/men' element={<Men/>}></Route>
           <Route path='/cart' element={
            <PrivateRoute>
            <Cart/>
            </PrivateRoute>
            }></Route>
           <Route path='/product' element={
           <PrivateRoute>
            <Product/>
          </PrivateRoute>   
            }></Route>
           <Route path='/product/:id' element={<SingleProduct/>}></Route>
           <Route path='/product/edit/:id' element={
           <PrivateRoute>
            <Edit/>
            </PrivateRoute> 
            }></Route>
           <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </>
  )
}

export default MainRoutes