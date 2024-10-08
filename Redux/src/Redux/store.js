import {legacy_createStore} from "redux"

let initial = {
    count : 0,
    count1 : 0
}

const reducer = (state = initial,action)=>{
    switch(action.type){
        case "INC" :
            return {
                ...state,
                count : state.count + 1
            }
        case "DEC" :
            return {
                ...state,
                count : state.count - 1
            }
        case "INCREASE" :
             return {
                ...state,
                count1 : state.count1 + action.payload
             }  
        case "DECREASE" :
        return {
            ...state,
            count1 : state.count1 - action.payload
        }       
             
        default : return state;    
    }
    
}


export let store = legacy_createStore(reducer)

// export default store