import React, { Component } from 'react'
import "./Footer.css"
export default class Footer extends Component {
    //判断是否全选
    SelectAll = (event) => {
        const { SelectAll } = this.props
        SelectAll(event.target.checked)

    }
    //清除已完成项目
    clearCompleted = () => {
        const { clearCompleted } = this.props
        clearCompleted()


    }
    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        const all = todos.length

        return (
            <div>
                <div className="todo-footer" >
                    <label>
                        <input type="checkbox" onChange={this.SelectAll} checked={doneCount === all && all !== 0 ? true : false} />
                    </label>
                    <span>
                        <span>已完成{doneCount}</span> / 全部{all}
                    </span>
                    <button className="btn btn-danger" onClick={this.clearCompleted}>清除已完成任务</button>
                </div>
            </div>
        )
    }
}
