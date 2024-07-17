import React, { useState } from 'react'
import DataList from './DataList'

function Data() {
    // const [title,setTitle] = useState("");
    // const [price,setPrice] = useState("");
    // const [img,setImg] = useState("");
    // const [des,SetDes] = useState("")
    const [obj,setObj] = useState({
        title : "",
        price : "",
        img : "",
        des : ""
    })
    const [data,setData] = useState([])

    const handleChange = (e)=>{
      
        setObj({...obj, [e.target.name] : e.target.value})
    }
  const handleClick = ()=>{
    
    setData([...data,obj])
    setObj({
        title : "",
        price : "",
        img : "",
        des : ""
    })
  }  
  return (
    <div>
        <input type="text" value={obj.title} placeholder='Title' name='title' onChange={handleChange} />
        <input type="text" value={obj.price} placeholder='Price' name='price'  onChange={handleChange} />
        <input type="text" value={obj.img} placeholder='ImageURL' name='img'  onChange={handleChange} />
        <input type="text" value={obj.des} placeholder='Description' name='des'  onChange={handleChange} />
        <button onClick={handleClick}>Submit</button>
       {data== null ? <h1>Loading.........</h1> : <DataList arr={data}/>}
    </div>
  )
}

export default Data