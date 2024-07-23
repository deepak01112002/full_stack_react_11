import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [obj,setObj] = useState({
      email : "",
      password : ""
   })
   const [arr,setarr] = useState([])
   const [viewPass,setviewPass] = useState(false)
   const handleChange = (e)=>{
        let {name,value} = e.target
      setObj({...obj,[name] : value})
   }
   const handleSubmit = (e)=>{
     e.preventDefault()
    setarr([...arr,obj])
    setObj({
      email : "",
      password : ""
    })
   }
   console.log(arr)
  return (
    <>
      <form onSubmit={handleSubmit}>
         <input type="email" value={obj.email} name='email' onChange={handleChange} required/>
         <input type={viewPass ? "text" : "password"}  name='password' value={obj.password} onChange={handleChange} required/>
         {viewPass==false ? <span onClick={()=>setviewPass(true)} class="material-symbols-outlined">
          visibility
            </span> : <span onClick={()=>setviewPass(false)} class="material-symbols-outlined">
            visibility_off
            </span>}
         <input type="submit" />
      </form>
    </>
  )
}

export default App
