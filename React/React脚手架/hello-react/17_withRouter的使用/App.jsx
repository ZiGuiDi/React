import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Home from './pagas/Home'
import About from './pagas/About'
import Header from './Component/Header'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Header></Header>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 导航区 */}
                            {/* NavLink点谁谁高亮 自带样式名  */}
                            <NavLink className="list-group-item " to="/home">Home</NavLink>
                            <NavLink className="list-group-item " to="/about">About</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 展示区 */}
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/about" component={About} />
                                    {/* Redirect 重定向  */}
                                    <Redirect to="/home"></Redirect>
                                </Switch>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
