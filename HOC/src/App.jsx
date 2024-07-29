import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter1 from './Componets2/Counter1'
import Counter2 from './Components/Counter2'
import Counter3 from './Components/Counter3'
import Counter10 from './Componets2/Counter10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Counter1/>
     <Counter2/>
     <Counter3/> */}
     <Counter1/>
     <Counter10/>
    </>
  )
}

export default App
