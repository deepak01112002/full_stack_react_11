import { combineReducers, legacy_createStore } from "redux";
import { proReducer } from "./productReducer/ProductReducer";
import { SingleproReducer } from "./SingleReducer/singlePageReducer";

let combine = combineReducers({
    productReducer : proReducer,
    SingleProduct : SingleproReducer
})


export const store = legacy_createStore(combine)