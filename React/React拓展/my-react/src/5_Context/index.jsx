import React, { Component, } from 'react'
import "./index.css"
// React.createContext()需要先获取这个容器
const MyContext = React.createContext()
//Consumer是用来函数式组件中包裹的
const { Provider, Consumer } = MyContext
export default class A extends Component {

    state = { name: "tom", age: 18 }
    render() {
        const { name, age } = this.state
        return (
            <div className='father'>
                <h3>我是A组件,我的用户名是:{this.state.name}</h3>
                {/* Provider是将数据传输给后代组件的容器 */}
                <Provider value={{ name, age }}>
                    <B />
                </Provider>

            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='son'>
                <h3>我是B组件,我收到A组件的数据是:{ }</h3>
                <C />
            </div>
        )
    }
}
//类式组件中使用context
// class C extends Component {
//需要先声明
//     static contextType = MyContext
//     render() {
//         return (

//             <div className='grandson'>
//                 <h3>我是C组件,我收到A组件的数据是:{this.context.name}---{this.context.age}</h3>
//             </div>
//         )
//     }
// }
// const { Provider, Consumer } = MyContext
//函数式组件context的使用方法
function C() {
    return (
        <div className='grandson'>
            <h3>我是C组件,我收到A组件的数据是:
                <Consumer>
                    {value => { return value.name + "---" + value.age; }}
                </Consumer>
            </h3>
        </div>
    )
}

