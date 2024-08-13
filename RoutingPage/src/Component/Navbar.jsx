import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
         <Link to={"/"} >Home</Link>
         <Link to={"/product"}>Product</Link>
         <Link to={"/cart"}>Cart</Link>
         <Link to={"/men"}>Men</Link>
    </nav>
  )
}

export default Navbar