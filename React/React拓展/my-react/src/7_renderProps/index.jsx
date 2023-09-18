import React, { Component, Fragment } from 'react'

export default class Father extends Component {
    render() {
        return (
            <Fragment>
                {/* 利用这种方式来创建B是A的子组件 */}
                <h1>Father组件</h1>
                <A render={(name) => {
                    return <B name={name} />
                }}>
                </A>
            </Fragment>
        )
    }
}

class A extends Component {
    state = { name: "tom" }
    render() {
        return (
            <div>
                <h2>A组件 :{this.state.name}</h2>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div>
                <h3>B组件:{this.props.name}</h3>
            </div>
        )
    }
}

