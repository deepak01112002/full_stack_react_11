import React from 'react'

function Data({arr}) {
  return (
    <div>
        {
            arr.map((el)=>{
                return (
                      <div>
                         <img src={el.image} alt={el.title} width={"250px"} />
                         <h5>{el.title} - ₹{el.price}</h5>
                      </div>
                )
            })
        }
        
    </div>
  )
}

export default Data