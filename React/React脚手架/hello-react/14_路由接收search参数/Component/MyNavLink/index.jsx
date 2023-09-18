import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        // const { to, children } = this.props
        // console.log(this.props);
        //因为this.props是一个对象 可以在NavLink中使用对象展开来添加标签属性
        return (
            /* activeClassName可以重写样式名 */
            <div><NavLink className="list-group-item "{...this.props} activeClassName="my_color"></NavLink></div>
        )
    }
}
