//该文件是使用react-redux链接store与ui组件的桥梁
import CountUI from "../../components/Count"
import { connect } from "react-redux"
import { countIncrementAction, countDecrementAction, countIncrementAsyncAction } from "../../redux/count_action"
//connect函数接收两个参数
//connect用来创建一个组件UI的容器组件
export default connect(state => ({ count: state })
    , {
        //action文件获取的都是函数，可以直接交给key来调用 由于接收到action
        //react-rudex会自动调用dispatch
        add: countIncrementAction,
        dec: countDecrementAction,
        addAsync: countIncrementAsyncAction
    })(CountUI)