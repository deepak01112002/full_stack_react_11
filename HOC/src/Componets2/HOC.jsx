import React, { useState } from 'react'

function HOC(OriginalComponent) {
    const add = ()=>{
        const [count , setCount] = useState(10);
        const handleInc =()=>{
            setCount(count + 1)
        }
        const handleDec = ()=>{
            setCount(count - 1)
        }
      return (
        <div>
            <h1>{count}</h1>
            <OriginalComponent INC={handleInc} DEC={handleDec} />
        </div>
      ) 
    }
    return add;
}

export default HOC