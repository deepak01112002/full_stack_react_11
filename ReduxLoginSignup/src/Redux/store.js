
import {legacy_createStore,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"

let initial = {
    isLogin : false,
    user : null,
    isPasswordError : false,
    isError : false,
    isLoading : false
}

const reducer = (state = initial,{type,payload})=>{
      switch(type){
           case "LOADING" : 
            return {
                ...state,
                isLoading : true
            }
            case "SUCCESS" :
              return {
                 ...state,
                 user : payload,
                 isLogin : true,
                 isLoading : false,
                 isPasswordError : false
              }
            case "PASSWORDERROR" :
                return{
                    ...state,
                    isLoading : false,
                    isPasswordError : true
                }  
            case "ERROR" : 
               return {
                  ...state,
                  isLoading : false,
                  isError : true
               }  
            default : return state   
            
      }
}

export const fetchapi = (deepak) => (state)=>{
    deepak({type : "LOADING"})
    fetch(`https://mock-server-app2-dll0.onrender.com/user?email=${state.email}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        if(res.length){
            deepak({type : "SUCCESS", payload : res})
        }else{
            deepak({type : "PASSWORDERROR"})
        }
        
    })
    .catch((err)=>{
        console.log(err)
        deepak({type : "ERROR"})
    })
}


export const store = legacy_createStore(reducer,applyMiddleware(thunk))