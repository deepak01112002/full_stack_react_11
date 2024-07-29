import React, { useState } from 'react'
import HOC from './HOC';

function Counter1({INC,DEC}) {
   
  return (
    <div>
        <button onClick={INC}>+</button>
        <button onClick={DEC}>-</button>
    </div>
  )
}

export default HOC(Counter1)