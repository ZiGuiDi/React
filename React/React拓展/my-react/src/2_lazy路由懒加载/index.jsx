import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
//利用lazy可以实现路由懒加载
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
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
                            <NavLink className="list-group-item " to="/home">Home</NavLink>
                            <NavLink className="list-group-item " to="/about">About</NavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 展示区 */}
                                {/* Suspense需要包裹在展示区  */}
                                {/* Suspense的作用是在路由还没完全加载的时候展示的内容 */}
                                <Suspense fallback={<h2>Loding....</h2>}>
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Suspense>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
