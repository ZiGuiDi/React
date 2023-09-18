import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
    state = {
        car: "奔驰"
    }
    increment = () => {
        const { value } = this.selectNumber;
        //dispatch({_,第二个参数的key要与reducer中的key要相同})
        store.dispatch({
            type: "increment",
            data: value * 1
        })
    }

    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({
            type: "decrement",
            data: value * 1
        })
    }
    incrementInOdd = () => {
        const { value } = this.selectNumber
        if (store.getState() % 2 !== 0) {
            store.dispatch({
                type: "increment",
                data: value * 1
            })
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({
                type: "increment",
                data: value * 1
            })

        }, 500);
    }
    render() {
        return (
            <div>
                <h2>当前和为:{store.getState()}</h2>
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
