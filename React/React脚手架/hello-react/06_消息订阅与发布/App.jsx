import React, { Component } from 'react'
import Seach from './Component/Seach'
import List from "./Component/List"
import "./App.css"
export default class App extends Component {

    render() {

        return (

            <div className="container">
                <Seach />
                <List />
            </div>
        )
    }
}
