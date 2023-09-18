// import { configureStore } from "@reduxjs/toolkit";
/* 
这个文件用来创建一个store的
*/
import { legacy_createStore, applyMiddleware } from 'redux'//legacy_createStore创建store
import countReducer from "./count_reducer";
import thunk from "redux-thunk"
export default legacy_createStore(countReducer, applyMiddleware(thunk))

