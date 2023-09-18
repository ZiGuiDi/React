import React, { Component } from 'react'

export default class Detali extends Component {
    state = {
        datailData:
            [
                { id: "01", content: "你好中国" },
                { id: "02", content: "你好世界" },
                { id: "03", content: "你好未来" }

            ]
    }
    render() {
        const { id, title } = this.props.match.params
        const findResult = this.state.datailData.find(item => item.id === id)
        return (
            <div>
                <ul>
                    <li> ID:{id}</li>
                    <li> TITLE:{title}</li>
                    <li> CONTENT:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
