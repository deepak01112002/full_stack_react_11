import React, { useState } from 'react'
import Carousel from '../Component/Carousel'

function Home() {
    
  const [state,setState] = useState({
    title : "",
    img : "",
    price : ""
  })
   const handleClick = (e)=>{
      const {name,value}  = e.target
      setState({...state,[name] : value})
   }
   const handleSubmit = (e)=>{
       e.preventDefault()
       fetch("https://mockserver-xqg9.onrender.com/products",{
          method  : "POST",
          headers : {
             "Content-Type" : "application/json"
          },
          body : JSON.stringify(state)
       }).then((res)=>res.json())
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err))
   }


  return (
    <div>
        <h1>ADD PRODUCT</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name='title'  onChange={handleClick} />
            <input type="text" name='img' onChange={handleClick} />
            <input type="text" name='price'  onChange={handleClick}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Home