import Data from "./Data"


function Counter(props) {
  return (
    <div>
        <h1>{props.deepak}</h1>
        <h1>Name :- {props.name}</h1>
        <h1>Class :- {props.class}</h1>
        <h1>Roll No:- {props.rollno}</h1>
        <Data n={props.name}/>
    </div>
  )
}



export default Counter