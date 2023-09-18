import React, { PureComponent, Fragment } from 'react'
//使用Component时 调用setState时，即使传入空对象 页面不更新也会使render调用
//可以使用shouldComponentUpdate函数进行判断是否开启阀门
//或者使用PureComponent，react封装好的，但是有个bug 若setState修改的是同一个地址的对象则返回false
export default class Father extends PureComponent {
    state = { car: '奔驰' }
    changeCar = () => {
        this.setState({ car: '宝马' })
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //可以接到两个参数，分别是即将改变的props以及state的值
    //注：需要return true 或者false
    // }
    render() {
        console.log("F---render");
        return (
            <Fragment>
                <h1>我是Father组件:{this.state.car}</h1>
                <button onClick={this.changeCar}>换车</button>
                <Child car={this.state.car}></Child>
            </Fragment>
        )
    }
}

class Child extends PureComponent {
    render() {
        console.log("C---render");
        return (
            <Fragment>
                <h3>我是Child组件:{this.props.car}</h3>
            </Fragment>
        )
    }
}

