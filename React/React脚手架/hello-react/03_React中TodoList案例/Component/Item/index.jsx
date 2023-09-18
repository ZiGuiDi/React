import React, { Component } from 'react'
import "./Item.css"
export default class Item extends Component {
    state = {
        mouse: false
    }
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    handleCheck = (id) => {
        return (event) => {
            const { updataTodo } = this.props
            const done = event.target.checked
            updataTodo(id, done)
        }
    }
    moveTodo = (id) => {
        return () => {
            const { moveTodo } = this.props
            if (window.confirm("是否删除")) {
                moveTodo(id)
            }
        }
    }
    render() {
        const { todos } = this.props
        const { mouse } = this.state
        return (
            <div> <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ background: mouse ? "#ccc" : "white" }}  >
                <label>
                    <input type="checkbox" checked={todos.done} onChange={this.handleCheck(todos.id)} />
                    <span>{todos.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} onClick={this.moveTodo(todos.id)}>删除</button>
            </li></div>
        )
    }
}
