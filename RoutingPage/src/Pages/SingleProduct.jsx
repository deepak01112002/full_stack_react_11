import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
     const obj = useParams()
     const [data,setData] = useState(null)
     useEffect(()=>{
        fetch(`https://mockserver-xqg9.onrender.com/products/${obj.id}`)
        .then((Res)=>Res.json())
        .then((res)=>{
         setData(res)
        })
        .catch((err)=>{
          console.log(err)
        })
     },[])
     
  return (
    <div>
       {data != null ? <>
        <img src={data.img} alt="" width={"150px"} />
        <h1>{data.title}</h1>
        <h4>{data.price } </h4> </> : "Not Data Found...."}
    </div>
  )
}

export default SingleProduct