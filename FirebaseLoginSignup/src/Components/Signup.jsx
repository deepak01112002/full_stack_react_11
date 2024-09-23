import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../FirebaseFolder/Firebase';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const UserCollection = collection(db,"users")
    const [d,setD] = useState([])
    const navigate =  useNavigate()
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
    const handleSubmit = async (e)=>{
      e.preventDefault()
      let a = d.filter((el)=>{
        return el.email == email
      })

      let obj = {
        email,
        pass
      }
      if(a.length > 0){
        alert("User alerady registered")
      }else{

      await addDoc(UserCollection,obj)
      alert("User Signup Successfully")
      
      }
      navigate("/login")
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

export default Signup