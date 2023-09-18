import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
    //需要用数组结构出来
    const [details] = useSearchParams()
    //然后调用get()方法传入要获取的search值 示例如下：
    const id = details.get("id")
    const title = details.get("title")
    const content = details.get("content")

    return (
        <div>
            <div>id:{id}</div>
            <div>标题:{title}</div>
            <div>内容:{content}</div>

        </div>
    )
}
