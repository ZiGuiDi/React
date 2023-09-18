import React, { Component } from 'react'
import axios from 'axios'
export default class Seach extends Component {
    seachUser = () => {
        const { searchBox } = this
        const { getUserInfo } = this.props
        //是否第一次发送
        getUserInfo({ isFirst: false, isLoding: true })
        axios.get(`http://localhost:3000/api1/search/users?q=${searchBox.value}`).then((err => { console.log(err); },
            res => { getUserInfo({ isLoding: false, userInfo: res.data.items }) }))
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
