import React, { useEffect, useState } from 'react'
import { db } from './FirebaseFolder/firebase';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

function Login() {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("")
    const [data,setData] = useState([])
    const [i,setI] = useState(false)
    const [editId,setEditId] = useState(null)
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
    },[i])  
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let obj = {
          email,
          pass
        }
      const data = doc(db,"users",editId)
      console.log(data)
      await updateDoc(data,obj)
      alert("Data updated Successfully")
        setI(!i)
    }
    const handleDelete = async (id)=>{
       const data = doc(db,"users",id)
       await deleteDoc(data)
       alert("Data Deleted Successfully")
      //  getData()
      setI(!i)
    }

    const handleEdit = (id,email,pass)=>{
       setEmail(email)
       setPass(pass)
       setEditId(id)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
          <input type="submit" />
      </form>
      {
        data.map((el)=>{
          return (
              <div>
                  <h1>{el.email}</h1>
                  <button onClick={()=>handleEdit(el.deepak,el.email,el.pass)}>Edit</button>
                  <button onClick={()=>handleDelete(el.deepak)}>Delete</button>
              </div>
          )
        })
      }
    </div>
  )
}

export default Login