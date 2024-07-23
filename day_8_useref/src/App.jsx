import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/Data'

function App() {

   const first =  useRef(null)
   const second = useRef(null)
      
   const handleClick = ()=>{
   
      first.current.style.border = "1px solid red"
      second.current.style.border = "1px solid orange"
      
   }
    


  return (
     <div>
        <input type="text" ref={first} />
        <input type="text" ref={second} />
        <button onClick={handleClick}>Click</button>
     </div>
  )
}

export default App
