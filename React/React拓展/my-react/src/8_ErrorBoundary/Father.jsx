import React, { Component } from 'react'
import Son from './Son'
export default class Father extends Component {
    state = {
        hasError: ""
    }
    //错误边界getDerivedStateFromError出现错误时修改hasError的值
    //不会让页面飘红 会展示别的信息
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //componentDidCatch只要子组件出现错误就会返回错误信息
    //一般用于给统计错误，发送请求到后台去
    componentDidCatch(error, info) {
        console.log(error, "1111")
    }
    render() {
        return (
            <div>
                <h1>Father</h1>
                {
                    this.state.hasError ? <h1>当前网络不稳定</h1> : <Son />
                }
            </div>
        )
    }
}
