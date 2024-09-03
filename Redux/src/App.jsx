import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
   const [data,setData] =  useState(0)
   const handleIncrease = ()=>{
    setData(data + 1)
   }
   const handleDecrease = ()=>{
    setData(data - 1)
   }
  return (
    <>
      <h1>{data}</h1>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  )
}

export default App
