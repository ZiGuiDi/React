import React, { Component } from 'react'
export default class Count extends Component {
    state = {
        car: "奔驰"
    }
    increment = () => {
        const { value } = this.selectNumber;
        this.props.add(value * 1)

    }

    decrement = () => {
        const { value } = this.selectNumber
        this.props.dec(value * 1)


    }
    incrementInOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.add(value * 1)

        }

    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.addAsync(value * 1, 500)

    }
    render() {
        // console.log(this.props);
        return (
            <div>
                <h2>当前和为:{this.props.count}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementInOdd}>奇数+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>&nbsp;

            </div>
        )
    }
}
