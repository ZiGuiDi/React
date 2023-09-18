// import { configureStore } from "@reduxjs/toolkit";
/* 
这个文件用来创建一个store的
*/
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'//legacy_createStore创建store
import countReducer from "./reducers/count";
import personReducer from "./reducers/person"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default legacy_createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

