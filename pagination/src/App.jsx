import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [pro, setPro] = useState([]);
  const [page, setPage] = useState(1);
  const [len,setlen] = useState(0)
  

  console.log(pro.length/10)
  useEffect(() => {
    fetch(
      `https://mock-server-app2-dll0.onrender.com/product?_page=${page}&_limit=10`
    )
      .then((res) => {
        setlen(res.headers.get('X-Total-Count'))
        return res.json();
      })
      .then((Res) => {
        console.log(Res);
        setPro(Res);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, [page]);

  return (
    <>
     <div>
        {
          pro.map((el)=>{
            return <div>
                <p>{el.id} - {el.title}</p>
            </div>
          })
        }
     </div>
     {/* <button disabled={page == 1} onClick={()=>setPage(page - 1)}>prev</button>
      <button onClick={()=>setPage(2)}>2</button>
     <button disabled={page > len/10} onClick={()=>setPage(page + 1)}>next</button> */}
      <Pagination totalpage={len}/>
    </>
  )
}

function Pagination({totalpage}){
  const pages = new Array(totalpage)
  return <>
       {
        pages.map((el)=>{
           return <button>one</button>
        })
       }
  </>
}

export default App
