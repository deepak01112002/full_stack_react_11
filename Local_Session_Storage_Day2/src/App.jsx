import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [state,setState] = useState({
      title : "",
      price : "",
      des : "",
      image : ""
   })
   const [arr,setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])
   const [edit,setEdit] = useState(null)
    const handleChange = (e)=>{
            let {name,value} = e.target
            setState({...state,[name] : value})
    } 
   const handleSubmit = (e)=>{
       e.preventDefault()
       if(edit == null){
       setArr([...arr,state])
       }else{
         let d = arr.map((el)=>{
          if(el.title == edit){
            return {...el,...state}
          }else{
            return el
          }
         })
        setArr(d) 
        setEdit(null)
       }
       setState({
        title : "",
        price : "",
        des : "",
        image : ""
       })
   }
   useEffect(()=>{
    localStorage.setItem("data",JSON.stringify(arr))
   },[arr])
   const handleDelete = (title)=>{
       let a = [];
       for(let x=0; x<arr.length; x++){
        if(arr[x].title != title){
          a.push(arr[x])
        }
       }
       setArr(a)
   }
   const handleEdit = (T)=>{
       setEdit(T)
     arr.forEach(element => {
        if(element.title == T){
           setState(element)
        }
     });
    

   }
   let {title,price,des,image} = state
  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" value={title} name='title' placeholder='Title' onChange={handleChange}/>
          <input type="text" value={price} name='price' placeholder='Price' onChange={handleChange}/>
          <input type="text" value={des} name='des' placeholder='Description' onChange={handleChange}/>
          <input type="text" name='image' value={image} placeholder='Image URL' onChange={handleChange}/>
          <input type="submit" value={edit != null ? "Update" : "Submit"}/>
      </form>
      
      {
        arr.map((el)=>{
             return (
                 <div>
                     <img src={el.image} alt={el.title} />
                     <h2>{el.title}</h2>
                     <p>{el.des} - ₹{el.price}</p>
                     <button onClick={()=>handleDelete(el.title)}>Delete</button>
                     <button onClick={()=>handleEdit(el.title)}>Edit</button>
                 </div>
             )
        })
      }
    </>
  )
}

export default App
