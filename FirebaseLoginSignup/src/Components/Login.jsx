import React, { useEffect, useState } from 'react'
import { db, googleAuth } from '../FirebaseFolder/Firebase';
import { collection, getDoc, getDocs } from 'firebase/firestore';
import { google } from '../ReduxFolder/User/UserReducer';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const [d,setD] = useState([])
    const [user,setUser] = useState(null)
    const UserCollection = collection(db,"users")
    const dispatch  = useDispatch()
    const state = useSelector((s)=>s.UserReducer)
    console.log(state)
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
    const handleClick = ()=>{
         dispatch(google)
        // google(dispatch)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
      <h1>{user}</h1>
      <button onClick={handleClick}>Google</button>
    </div>
  )
}

export default Login