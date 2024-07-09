import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {Deepak1,Deepak}from "./Deepak"
import Navbar from "./Navbar"
function App() {
  
  const [state,setState] = useState(10)
  const [name,setName] = useState("Deepak Pandey")
  const [obj,setobj] = useState({class : "9th",rollNo : 25})

  return (
    <div className="App">
       <Navbar/>
       <Deepak></Deepak>
       <Deepak1/>
       <h1>{state}</h1>
       <h1>Name : {name}</h1>
       <h1>Class : {obj.class}</h1>
       <h1>RollNo : {obj.rollNo}</h1>

    </div>
  );
}

export default App;
