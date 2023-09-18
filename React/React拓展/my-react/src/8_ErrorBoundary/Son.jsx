import React, { Component } from 'react'

export default class Son extends Component {
    // state = {
    //     user: [
    //         { name: 'John', age: 20 },
    //         { name: 'Mary', age: 21 },
    //         { name: 'Jane', age: 22 }]
    // }
    state = { user: "123" }

    render() {
        return (
            <div>
                {
                    this.state.user.map((item, index) => {
                        return <h2 key={index} >{item.name}---{item.age}</h2>
                    })
                }
            </div>
        )
    }
}
