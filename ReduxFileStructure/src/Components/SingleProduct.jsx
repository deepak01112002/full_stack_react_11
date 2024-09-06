import React, { useEffect } from 'react'
import { SingleproReducer } from '../Redux/SingleReducer/singlePageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from '../Redux/SingleReducer/action'

function SingleProduct() {
    const dispatch = useDispatch()
    const data = useSelector((s)=>s.SingleProduct)
    console.log(data)
    useEffect(()=>{
       dispatch(FetchData)(2)
    },[])
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct