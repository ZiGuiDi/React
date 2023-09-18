import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }
    add = () => {
        //setState是一个异步函数，等同步任务完成后才会执行，第二个回调执行时间是 等count更新后执行
        // this.setState({ count: this.state.count + 1 }, () => {
        //     console.log(this.state.count);
        // })
        //函数式写法可以接收到state和props
        this.setState((state, props) => {
            console.log(state, props);
            return { count: state.count + 1 }
        }, () => {

        })
    }
    render() {
        return (
            <div>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}
