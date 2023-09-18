import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { userInfo, isFirst, isLoding, err } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后搜索</h2> :
                        isLoding ? <h2>正在加载中...</h2> :
                            err ? <h2>{err}</h2> :
                                userInfo.map((user) => {
                                    return <div className="card" key={user.id}>
                                        <a href={user.events_url} target="_blank" rel="noreferrer">
                                            <img src={user.avatar_url} style={{ width: '100px' }} />
                                        </a>
                                        <p className="card-text">{user.login}</p>
                                    </div>
                                })
                }

            </div>
        )
    }
}
