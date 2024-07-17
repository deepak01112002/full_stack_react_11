import React from 'react'

function DataList(props) {
  return (
    <div>
        {
           props.arr && props.arr.map((el)=>{
                return (
                     <div>
                        <img src={el.img} alt="" />
                        <h3>{el.title} - ₹{el.price}</h3>
                        <p>{el.des}</p>
                        <button>Delete</button>
                        <button>Edit</button>
                     </div>
                )
            })
        }
    </div>
  )
}

export default DataList