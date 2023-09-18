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
    //编程式导航push会有浏览记录 可以回退页面
    pushShow = (id, title) => {
        this.props.history.push("/home/message/detail", { id, title })
        // 

    }
    //编程式导航replace不会会有浏览记录 不可以回退页面

    replaceShow = (id, title) => {
        this.props.history.replace({ pathname: "/home/message/detail", state: { id: id, title: title } })

    }
    render() {
        return (
            <div>
                <div>
                    <ul>
                        {this.state.detailList.map((detailObj) => {
                            //使用state发送参数需要用对象的方式发送
                            return <div key={detailObj.id}>
                                <li >
                                    <Link to={{
                                        pathname: "/home/message/detail",
                                        state: { id: detailObj.id, title: detailObj.title }
                                    }}>{detailObj.title}</Link>
                                </li>
                                &nbsp;<button onClick={() => this.pushShow(detailObj.id, detailObj.title)}>push跳转</button>

                                &nbsp;<button onClick={() => this.replaceShow(detailObj.id, detailObj.title)}>replace跳转</button>

                            </div>
                        })}
                    </ul>
                    <hr />
                    <Route path="/home/message/detail" component={Detali}></Route>
                </div>
            </div>
        )
    }
}
