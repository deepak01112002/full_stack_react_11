import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
    const obj = useParams()
    const [data,setData] = useState(null)
    const navigate = useNavigate()
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
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({...data,[name] : value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`https://mockserver-xqg9.onrender.com/products/${obj.id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            navigate("/product")
        })
        .catch((err)=>console.log(err))
        
    }

  return (
    <div>
         {data ? <form onSubmit={handleSubmit} >
            <input value={data.title} type="text" name='title' onChange={handleChange} />
            <input value={data.img} type="text" name='img' onChange={handleChange} />
            <input value={data.price} type="text" name='price' onChange={handleChange} />
            <input type="submit" value={"Update"} />
        </form> : <>Loading.......</>}
    </div>
  )
}

export default Edit