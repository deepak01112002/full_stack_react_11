import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {

   const [data,setData] = useState([])
   const [filterData,setFilter] = useState({
    Shaving_Tools : false,
    Hair_Styling_Tools : false
   })
   const [sortData,setSort] = useState("")
   const [searchData,setSearchData] = useState("")

  useEffect(()=>{
      fetch(`https://mock-server-app2-dll0.onrender.com/product`)
      .then((Res)=>Res.json())
      .then((res)=>{
       setData(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

  const handleFilter = (e)=>{
   
    setFilter({
      ...filterData,
     [e.target.name] : e.target.checked
    })
  }
  console.log(filterData)
  let FilteredData = data
  // const handleDelete = (id)=>{
  //     fetch(`https://mockserver-xqg9.onrender.com/products/${id}`,{
  //       method : "DELETE"
  //     })
  //     .then((res)=>res.json())
  //     .then((res)=>{
  //       console.log(res)
  //       setDelete(!Delete)
  //     })
  //     .catch((Err)=>console.log(Err))
  // }
   if(filterData.Hair_Styling_Tools || filterData.Shaving_Tools){
       FilteredData = FilteredData.filter((el)=>{
            if(filterData.Hair_Styling_Tools == true && el.category == "Hair_Styling_Tools"){
              return true;
            }
            if(filterData.Shaving_Tools && el.category == "Shaving_Tools"){
              return true;
            }
        })
      
   }
   if(sortData){
      FilteredData = FilteredData.sort((a,b)=>{
         if(sortData == "asc"){
           return a.price - b.price
         }else if(sortData == "Aasc"){
            return a.title.localeCompare(b.title)
         }else if(sortData == "Ddesc"){
          return b.title.localeCompare(a.title)
       }
      })
      
   }
   if(searchData){
      FilteredData = FilteredData.filter((el)=>{
         return el.title.toLowerCase().includes(searchData.toLowerCase())
      })
      
   }

  return (
    <>
      <div>
        <input type="checkbox" name='Shaving_Tools' onChange={handleFilter} /> Shaving
        <input type="checkbox" name='Hair_Styling_Tools'  onChange={handleFilter}  /> Hair
      </div>
      <div>
         <select name="" id="" onChange={(e)=>setSort(e.target.value)}>
            <option value="">Sort the data</option>
            <option value="Aasc"> A TO Z</option>
            <option value="Ddesc">Z To A</option>
            <option value="asc">ascending</option>
         </select>
      </div>
      <div>
          <input type="text" onChange={(e)=>setSearchData(e.target.value)} />
      </div>
      <div style={{display : "flex",flexWrap : "wrap"}}>
        {
          FilteredData.map((el)=>{
             return (
               <div key={el.id}>
                    <Link to={`/product/${el.id}`} ><img src={el.image1} alt="" width={"200px"}/></Link> 
                    <h3>{el.title}</h3>
                    <span>{el.price}</span>
                    {/* <Link to={`/product/edit/${el.id}`}><button>Edit</button></Link>
                    <button onClick={()=>handleDelete(el.id)}>Delete</button> */}
                </div>
             )
          })
        }
    </div>
    </>
  )
}

export default Product