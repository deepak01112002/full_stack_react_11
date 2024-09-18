import React, { useEffect, useState } from 'react'
import { db } from './FirebaseFolder/firebase';
import { collection, getDocs } from 'firebase/firestore';

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const [data,setData] = useState([])
    const UserCollection = collection(db,"users")
    useEffect(()=>{
        async function getData (){
           let data = await getDocs(UserCollection)
           
           let val = data.docs.map((el)=>{
              return {deepak: el.id, ...el.data()}
           })
           setData(val)
        }
        getData()
    },[])  
    const handleSubmit = async (e)=>{
        e.preventDefault()
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
    </div>
  )
}

export default Login