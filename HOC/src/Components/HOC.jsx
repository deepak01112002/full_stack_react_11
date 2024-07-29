import React, { useState } from 'react'

function HOC(OriginalComponent) {
   const add = ()=>{
        const [count,setCount] = useState(0)
        const handleInc = ()=>{
            setCount(count+1)
        }
        const handleDec = ()=>{
            setCount(count - 1)
        }
    return (
        <>
        <h1>{count}</h1>
        <OriginalComponent count={count} INC={handleInc} DEC={handleDec}/>
        </>
    )
   }
   return add;
}

export default HOC