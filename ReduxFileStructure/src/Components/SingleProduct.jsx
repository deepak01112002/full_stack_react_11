import React, { useEffect } from 'react'
import { SingleproReducer } from '../Redux/SingleReducer/singlePageReducer'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from '../Redux/SingleReducer/action'
// import {useParams} from "react-router-dom"
function SingleProduct() {
    // const {id} = useParams()
    // console.log(id)
    const dispatch = useDispatch()
    const data = useSelector((s)=>s.SingleProduct)
    console.log(data)
    useEffect(()=>{
      //  FetchData(dispatch)
      dispatch(FetchData)(5)
    },[])
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct