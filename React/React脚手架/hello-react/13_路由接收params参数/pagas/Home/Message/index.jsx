import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detali from './Detail'
export default class Message extends Component {
    state = {
        detailList: [
            { id: "01", title: "消息1" },
            { id: "02", title: "消息2" },
            { id: "03", title: "消息3" }
        ]
    }
    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.detailList.map((detailObj) => {
                            return <li key={detailObj.id}>
                                <Link to={`/home/message/detail/${detailObj.id}/${detailObj.title}`}>{detailObj.title}</Link>
                            </li>
                        })}
                    </ul>
                    <hr />
                    <Route path="/home/message/detail/:id/:title" component={Detali}></Route>
                </div>
            </div>
        )
    }
}
