import React, { Component } from 'react'
//Count为组件容器 是组件UI的父组件
import Count from './containers/Count'
import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store} ></Count>
            </div>
        )
    }
}
