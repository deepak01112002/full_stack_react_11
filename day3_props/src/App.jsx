import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import FullCounter from './Components/FullCounter'

function App() {
   
  const [state,setState]  = useState(10);
  const [state1,setState1]  = useState("Deepak Pandey");
  const [state2,setState2]  = useState("9th");
  const [state3,setState3]  = useState(21);
  const [state4,setState4]  = useState("Red and white Multimedia");

  return (
    <div>
      <Counter deepak={state} name={state1} class1={state2} rollno={state3} institute={state4}/><hr />
      <FullCounter/>
    </div>
  )
}


export default App
