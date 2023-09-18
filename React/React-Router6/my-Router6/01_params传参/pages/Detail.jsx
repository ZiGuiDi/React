import React from 'react'
import { useParams } from 'react-router-dom'
export default function Detail() {
    //useParams函数可以接到路由传过来的params参数
    const details = useParams()
    return (
        <div>
            <div>id:{details.id}</div>
            <div>标题:{details.title}</div>
            <div>内容:{details.content}</div>
        </div>
    )
}
