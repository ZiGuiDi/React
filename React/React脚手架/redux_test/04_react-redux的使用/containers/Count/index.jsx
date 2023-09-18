//该文件是使用react-redux链接store与ui组件的桥梁
import CountUI from "../../components/Count"
import { connect } from "react-redux"
import { countIncrementAction, countDecrementAction, countIncrementAsyncAction } from "../../redux/count_action"
/* 
   1.mapStateToProps函数返回的是一个对象
   2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
   3.mapStateToProps用于传递状态
*/
const mapStateToProps = (state) => {
    return { count: state }
}
/* 
   1.mapDispatchToProps函数返回的是一个对象
   2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
   3.mapDispatchToProps用于传递操作状态的方法
*/
const mapDispatchToProps = (dispatch) => {
    return {
        add: (number) => dispatch(countIncrementAction(number)),
        dec: (number) => dispatch(countDecrementAction(number)),
        addAsync: (number, time) => dispatch(countIncrementAsyncAction(number, time))
    }
}
//connect函数接收两个参数
//connect用来创建一个组件UI的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)