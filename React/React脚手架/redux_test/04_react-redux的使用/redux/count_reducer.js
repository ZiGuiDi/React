// import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from "./constant"
//这个文件为修改被传过来的值，根据type来找到对应的返回值
const initState = 0//初始化状态
//preState参数为原先的值，action是一个对象能接收到key和value
export default function countReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }

}
