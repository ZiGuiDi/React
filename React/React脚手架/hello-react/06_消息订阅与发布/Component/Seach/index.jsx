import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Seach extends Component {

    seachUser = () => {
        const { searchBox } = this
        PubSub.publish('delete', this.state) //发布消息
        // 是否第一次发送
        PubSub.publish('delete', { isFirst: false, isLoding: true })
        axios.get(`https://api.github.com/search/users?q=${searchBox.value}`)
            .then((err => { console.log(err); },
                res => {
                    //发送数据给订阅者
                    PubSub.publish('delete', { userInfo: res.data.items, isLoding: false })
                }))
    }

    render() {

        return (

            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={(c) => { this.searchBox = c }} />&nbsp;<button onClick={this.seachUser}>Search</button>
                </div>
            </section>
        )
    }
}
