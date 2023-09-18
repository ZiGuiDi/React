import React, { Component } from 'react'
import Demo from './8_ErrorBoundary/Father'
export default class App extends Component {
    render() {
        return (
            <div>
                <Demo x={1}></Demo>
            </div>
        )
    }
}

