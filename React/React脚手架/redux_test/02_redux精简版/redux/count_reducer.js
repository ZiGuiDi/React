// import { combineReducers } from 'redux';
const initState = 0//初始化状态
//preState参数为原先的值，action是一个对象能接收到key和value
export default function countReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }

}
