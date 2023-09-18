import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import MyNavLink from "../../Component/MyNavLink"
import News from './News'
import Message from './Message'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>我是Home内容</h2>
                <ul className="nav nav-tabs">
                    <li>
                        {/* <a className="list-group-item" href="./home-news.html">News</a> */}
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/message">Message </MyNavLink>

                        {/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
                    </li>
                </ul>
                <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    <Redirect to="/home/news"></Redirect>
                </Switch>

            </div>

        )
    }
}
