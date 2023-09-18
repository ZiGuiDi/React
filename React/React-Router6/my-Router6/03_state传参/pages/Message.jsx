import React from 'react'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Message() {
    const [messages] = useState(
        [
            { id: "001", title: "消息1", content: "锄禾日当午" },
            { id: "002", title: "消息2", content: "汗滴禾下土" },
            { id: "003", title: "消息3", content: "谁知盘中餐" },
            { id: "004", title: "消息4", content: "粒粒皆辛苦" },
        ]
    )
    return (
        <div>
            <ul>
                {
                    messages.map(item => {
                        const { id, title, content } = item
                        return <li key={id}>
                            <Link to="detail" state={{ id, title, content }}>{item.title}</Link>
                        </li>
                    })
                }
            </ul>
            <hr />
            <Outlet></Outlet>
        </div >)
}
