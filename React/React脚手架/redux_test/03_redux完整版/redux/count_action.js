/* 
这个模块用来生成组件的action对象，
也可以理解为书写规则
*/

import { INCREMENT, DECREMENT } from "./constant"
export const countIncrementAction = data => ({ type: INCREMENT, data })
export const countDecrementAction = data => ({ type: DECREMENT, data })
let timer = null
//异步action 需要下载rudex-thunk 在store中写中间件，详情在store文件中
export const countIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch(countIncrementAction(data))
        }, time);

    }
}