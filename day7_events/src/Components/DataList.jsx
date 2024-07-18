import React from 'react'

function DataList(props) {
  return (
    <div>
        {
           props.arr && props.arr.map((el)=>{
                return (
                     <div key={el.id}>
                        <img src={el.img} alt="" width={"150px"} />
                        <h3>{el.title} - ₹{el.price}</h3>
                        <p>{el.des}</p>
                        <button onClick={()=>props.del(el.id)}>Delete</button>
                        <button onClick={()=>props.edit(el.id)}>Edit</button>
                     </div>
                )
            })
        }
    </div>
  )
}

export default DataList