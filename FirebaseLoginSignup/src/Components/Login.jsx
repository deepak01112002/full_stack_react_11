import React, { useEffect, useState } from 'react'
import { db } from '../FirebaseFolder/Firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const [d,setD] = useState([])
    const UserCollection = collection(db,"users")
    useEffect(()=>{
        async function getData(){
            let data = await getDocs(UserCollection)
            let val = data.docs.map((el)=>{
                return {id : el.id , ...el.data()}
            })
            setD(val)
        }
        getData()
    },[])
    const handleSubmit  = (e)=>{
        e.preventDefault()
        let a = d.filter((el)=>{
            return el.email == email && el.pass == pass
        })
        if(a.length > 0){
            alert("Login Successfull")
        }else{
            alert("Login Unsuccesfull")
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
    </div>
  )
}

export default Login