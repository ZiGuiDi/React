import { connect } from "react-redux"
import Send from "../../Component/Send"
import { INCREMENT } from "../../rudex/action/count"
//connects()(传入UI组件)
//以props的形式传入count: state,能添加在对应的UI组件身上的props上
//add: INCREMENT可以在props身上调用dispatch函数
const connects = connect((state) => ({ count: state }), {
    add: INCREMENT
}
)(Send)
export default connects