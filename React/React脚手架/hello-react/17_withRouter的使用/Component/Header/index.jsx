import React, { Component } from 'react'
//withRouter可以在普通组件中获取路由组件中的一些属性以及方法
import { withRouter } from 'react-router-dom'
class Header extends Component {
    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()

    }
    render() {
        console.log(this.props);

        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>前进</button>
            </div>
        )
    }
}
export default withRouter(Header) 
