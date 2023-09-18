import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    get = () => {
        axios.get("http://localhost:3000/api1/cars").then(
            response => {
                console.log(response);

            },
            error => {
                console.log(error);
            }
        )
    }
    get2 = () => {
        axios.get("http://localhost:3000/api2/students").then(
            response => {
                console.log(response);

            },
            error => {
                console.log(error);
            }
        )
    }
    render() {

        return (
            <div>
                <div onClick={this.get}>点击发送请求</div>
                <button onClick={this.get2}>点击发送请求2</button>
            </div>
        )
    }
}
