import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {

   const [data,setData] = useState([])
   const [Delete,setDelete] = useState(true)

  useEffect(()=>{
      fetch(`https://mockserver-xqg9.onrender.com/products`)
      .then((Res)=>Res.json())
      .then((res)=>{
       setData(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[Delete])

  const handleDelete = (id)=>{
      fetch(`https://mockserver-xqg9.onrender.com/products/${id}`,{
        method : "DELETE"
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        setDelete(!Delete)
      })
      .catch((Err)=>console.log(Err))
  }

  return (
    <div style={{display : "flex",flexWrap : "wrap"}}>
        {
          data.map((el)=>{
             return (
               <div key={el.id}>
                    <Link to={`/product/${el.id}`} ><img src={el.img} alt="" width={"200px"}/></Link> 
                    <h3>{el.title}</h3>
                    <span>{el.price}</span>
                    <Link to={`/product/edit/${el.id}`}><button>Edit</button></Link>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                </div>
             )
          })
        }
    </div>
  )
}

export default Product