// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore } from 'redux'//legacy_createStore创建store
import countReducer from "./count_reducer";
export default legacy_createStore(countReducer)

