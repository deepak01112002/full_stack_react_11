import React, { useState } from 'react'
import "../index.css"
function FullCounter() {
    const [count,setCount] = useState(0)

    function Add(){
        setCount(count + 1)
    }
    function minus(){
        setCount(count - 1)
    }
  return (
    <div>
         <h1>{count}</h1>
         <button onClick={Add}>+</button>
         <button onClick={minus}>-</button>
    </div>
  )
}

export default FullCounter