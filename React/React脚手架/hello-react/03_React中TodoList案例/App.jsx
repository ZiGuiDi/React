import React from "react";
import "./index.css"
import Header from "./Component/Header";
import List from "./Component/List";
import Footer from "./Component/Footer";
class App extends React.Component {
    state = {
        todos: [
            { id: "001", name: "吃饭", done: true },
            { id: "002", name: "睡觉", done: true },
            { id: "003", name: "瓦", done: false }

        ]
    }
    getHeaderData = (data) => {
        const { todos } = this.state
        this.setState({ todos: [data, ...todos] })
    }
    //更新数据中Check信息
    updataTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })
        this.setState({ todos: newTodos })
    }
    //删除单条内容
    moveTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({ todos: newTodos })
    }
    //是否全选
    SelectAll = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todo) => {
            return { ...todo, done }
        })
        this.setState({ todos: newTodos })

    }
    //清除已完成
    clearCompleted = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => {
            return !todo.done
        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header getHeaderData={this.getHeaderData}></Header>
                        <List todos={todos} updataTodo={this.updataTodo} moveTodo={this.moveTodo}></List>
                        <Footer todos={todos} SelectAll={this.SelectAll} clearCompleted={this.clearCompleted}></Footer>
                    </div>
                </div>

            </div>
        )
    }
}
export default App