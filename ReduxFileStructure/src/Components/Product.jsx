import React, { useEffect } from 'react'
import { FetchData } from '../Redux/productReducer/action'
import { useDispatch, useSelector } from 'react-redux'

function Product() {
    const dispatch = useDispatch()
    const {isLoading,isError,data} = useSelector((s)=>s.productReducer)
    useEffect(()=>{
        FetchData(dispatch)
    },[])
  return (
    <div>
      {
        isLoading ? <h1>Loading......</h1> : 
        isError ? <h1>Loading......</h1>:
        data.map((el)=>{
            return (
                <div key={el.id}>
                    <h1>{el.name} - {el.email}</h1>
                </div>
            )
        })
      }
    </div>
  )
}

export default Product