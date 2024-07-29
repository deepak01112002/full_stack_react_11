import React, { useState } from 'react'

function DynamicForms() {
    const [arr,setArr] = useState(["skill","skill"])
    const handleClick = ()=>{
        setArr([...arr,"skill"])
    }
  return (
    <div>
        <form action="">
            <input type="text" name='username' />
            <input type="text" name='email' />
            <p>Skills :</p>
             {
                arr.map((el)=>{
                    return (
                        <input type='text' name={el}/>
                    )
                })
             }
            <input type="submit" />
        </form>
        <button onClick={handleClick}>Add new Field</button>
    </div>
  )
}

export default DynamicForms