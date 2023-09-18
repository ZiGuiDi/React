import React, { Component } from 'react'
import Item from '../Item'
import "./List.css"
export default class list extends Component {

    render() {
        const { todos, updataTodo, moveTodo } = this.props
        return (
            <div>
                <ul className="todo-main">
                    {todos.map((todo) => {
                        return <Item key={todo.id} todos={{ ...todo }} updataTodo={updataTodo} moveTodo={moveTodo} />
                    })}
                </ul>
            </div>
        )
    }
}
