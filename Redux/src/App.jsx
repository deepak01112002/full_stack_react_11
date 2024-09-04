import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import { useDispatch, useSelector } from 'react-redux'

function App() { 
       const value = useSelector((s)=>s)
       console.log(value)
       const dispatch = useDispatch()
  return (
    <>
      <h1>{value.count}</h1>
      <button onClick={()=>dispatch({type : "INC"})}>Deposit</button>
      <button onClick={()=>dispatch({type : "DEC"})}>withdraw</button>
      
    </>
  )
}

export default App
