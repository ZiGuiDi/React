import React, { Component } from 'react'
import Seach from './Component/Seach'
import List from "./Component/List"
import "./App.css"
export default class App extends Component {
    state = {
        userInfo: [],
        isFirst: true,
        isLoding: false,
        err: ''

    }
    getUserInfo = (data) => {
        this.setState(data)
    }
    render() {
        const { userInfo, isFirst, isLoding, err } = this.state
        return (

            <div className="container">
                <Seach getUserInfo={this.getUserInfo}></Seach>
                <List userInfo={userInfo} isFirst={isFirst}
                    isLoding={isLoding} err={err}></List>
            </div>
        )
    }
}
