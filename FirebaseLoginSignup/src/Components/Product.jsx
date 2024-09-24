import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../ReduxFolder/product/action'
import { deleteDoc, doc } from 'firebase/firestore'

function Product() {
    const dispatch = useDispatch()
    const state = useSelector((s)=>s.proReducer)
    console.log(state)
    useEffect(()=>{
       dispatch(getData)
    },[])
    const handleDelete = async()=>{
         
    }
  return (
    <div>
      {
        state.product.map((el)=>{
            return (
                <div>
                     <img src={el.img} alt={el.title} />
                     <p>{el.price} - {el.title}</p>
                     <button>Edit</button>
                     <button onClick={handleDelete}>Delete</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default Product