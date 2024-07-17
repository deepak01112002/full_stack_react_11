import React from 'react'
import { useState } from 'react'

function LoginSingup() {
    const [state,setState] = useState("sin")
    const [sinUser,setSinUser] = useState("")
    const [sinEmail,setSinEmail] = useState("")
    const [sinPass,setSinPass] = useState("")
    const [arr,setArr] = useState([])
    const [logEmail,setLogEmail] = useState("");
    const [logPass,setLogPass] = useState("")
    const [data,setData] = useState("")
    
    const handleClick = ()=>{
        let obj = {
            user : sinUser,
            email : sinEmail,
            password : sinPass
        }
        setArr([...arr,obj])
    }
    const handleLogClick =()=>{
        data = arr.filter((el)=>{
            if(el.email == logEmail && el.password == logPass){
                return el;
            }
        })
        console.log(data)
    }
  return (
    <div>
        {
            state == "sin" ? 
            <div>
                    <h1>Signup</h1>
                    <input type="text" placeholder='Username' onChange={(e)=>setSinUser(e.target.value)} /><br />
                    <input type="text" placeholder='Email ID' onChange={(e)=>setSinEmail(e.target.value)} /><br />
                    <input type="text" placeholder='Password' onChange={(e)=>setSinPass(e.target.value)} /><br />
                    <input type="submit" onClick={handleClick} /><br />
                    <span onClick={()=>setState("log")}>Already an account ?</span>
            </div>
            : <div>
                    <h1>Login</h1>
                    <input type="text" placeholder='Email ID' onChange={(e)=>setLogEmail(e.target.value)} /><br />
                    <input type="text" placeholder='Password' onChange={(e)=>setLogPass(e.target.value)} /><br />
                    <input type="submit" onClick={handleLogClick} /><br />
                    <span onClick={()=>setState("sin")}>Create an account?</span>
            </div>
        }
    </div>
  )
}

export default LoginSingup