import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Home from './pagas/Home'
import About from './pagas/About'
export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 导航区 */}
                            {/* NavLink点谁谁高亮 自带样式名  */}
                            <NavLink className="list-group-item " to="/home/a">Home</NavLink>
                            <NavLink className="list-group-item " to="/about/a">About</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 展示区 */}
                                {/* Switch 若匹配到该路由组件 则不会往下继续查找 提高效率问题 */}
                                <Switch>
                                    {/* 默认为模糊匹配 */}
                                    {/* exact严格匹配 你的跳转路径要和路由组件路径一样才能跳转 */}
                                    <Route path="/home" component={Home} />
                                    <Route exact path="/about" component={About} />
                                </Switch>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
