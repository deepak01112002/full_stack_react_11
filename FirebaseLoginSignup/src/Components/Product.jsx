import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../ReduxFolder/product/action'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../FirebaseFolder/Firebase'
import { useNavigate } from 'react-router-dom'

function Product() {
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    const navigate = useNavigate()
    console.log(state)
    useEffect(()=>{
       dispatch(getData)
    },[])
    const handleDelete = async(id)=>{
         let data = doc(db,"products",id)
         await deleteDoc(data)
         alert("Data Deleted Successfully")
         dispatch(getData)
    }
  return (
    <div>
      {
        state.product.map((el)=>{
            return (
                <div>
                     <img src={el.img} alt={el.title} width="150px"/>
                     <p>{el.price} - {el.title}</p>
                     <button onClick={()=>navigate(`/products/edit/${el.id}`)}>Edit</button>
                     <button onClick={()=>handleDelete(el.id)}>Delete</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Product