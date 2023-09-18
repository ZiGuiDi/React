import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
    const Detail = useLocation()
    const { state: { id, tiele, content } } = Detail

    return (
        <div>
            <div>id:{id}</div>
            <div>标题:{tiele}</div>
            <div>内容:{content}</div>
        </div>
    )
}
