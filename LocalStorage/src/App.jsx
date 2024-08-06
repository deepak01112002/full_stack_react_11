import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [state,setState] = useState(sessionStorage.getItem("count") || 0);

    useEffect(()=>{
      sessionStorage.setItem("count",state)
    },[state])

    const handleClick = ()=>{
      setState(state + 1)
    }
  return (
    <>
     <h1>{state}</h1>
     <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
