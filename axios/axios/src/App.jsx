import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
    
  useEffect(()=>{
    //  fetch(`https://jsonplaceholder.typicode.com/users/id`,{
    //    method : "PUT",
    //    headers : {
    //      "Content-Type" : "application/json"
    //    },
    //    body : JSON.stringify(state)
    //  })
    //  .then((Res)=>Res.json())
    //  .then((res)=>{
    //   console.log(res)
    //  })
    //  .catch((err)=>{
    //   console.log(err)
    //  })
     axios.delete(`https://jsonplaceholder.typicode.com/users/id`)
     .then((res)=>{
      console.log(res.data)
     })
     .catch((err)=>{
       console.log(err)
     })
  },[])


  return (
    <>
      
    </>
  )
}

export default App
