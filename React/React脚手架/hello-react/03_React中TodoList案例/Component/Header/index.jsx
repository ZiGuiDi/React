import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import "./Header.css"
export default class Header extends Component {
    getContent = (event) => {
        const { keyCode, target } = event
        const { getHeaderData } = this.props
        const todoObj = { id: nanoid(), name: target.value, done: false }
        if (keyCode !== 13) return
        if (target.value.trim() === "") {
            alert("输入不能为空")
            return
        }
        getHeaderData(todoObj)
        target.value = ""
    }
    render() {

        return (
            <div>
                <div className="todo-header">
                    <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.getContent} />
                </div>
            </div>
        )
    }
}
