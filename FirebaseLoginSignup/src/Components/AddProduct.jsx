import { collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../FirebaseFolder/Firebase';
import { addData } from '../ReduxFolder/product/action';
import { useDispatch, useSelector } from 'react-redux';

function AddProduct() {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [img,setImage] = useState("")
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    console.log(state)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        let obj = {
            title,
            price,
            img
        }
        dispatch(addData)(obj)
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
             <input type="text" placeholder='Title'  onChange={(e)=>setTitle(e.target.value)}/>
             <input type="text" placeholder='Price'  onChange={(e)=>setPrice(e.target.value)}/>
             <input type="text" placeholder='ImageUrl' onChange={(e)=>setImage(e.target.value)} />
             <input type="submit" />
        </form>
    </div>
  )
}

export default AddProduct