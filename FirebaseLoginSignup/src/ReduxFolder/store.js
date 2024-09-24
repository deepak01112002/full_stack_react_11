
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { proReducer } from "./product/productReducer"
import {thunk} from "redux-thunk"

const allReducer = combineReducers({
    proReducer
})

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))