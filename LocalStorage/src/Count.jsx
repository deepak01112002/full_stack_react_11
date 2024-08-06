import React, { useState } from 'react'

function Count() {
    const [count,setCount] = useState(localStorage.getItem("count"))
  return (
    <div>{count}</div>
  )
}

export default Count