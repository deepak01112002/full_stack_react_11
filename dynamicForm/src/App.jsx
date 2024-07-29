import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicForms from './Components/DynamicForms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicForms/>     
    </>
  )
}

export default App
