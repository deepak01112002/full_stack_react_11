import React from 'react'
import HOC from './HOC'

function Counter10(props) {
  return (
    <div>
        <button onClick={props.INC}>+</button>
        <button onClick={props.DEC}>-</button>
    </div>
  )
}

export default HOC(Counter10)