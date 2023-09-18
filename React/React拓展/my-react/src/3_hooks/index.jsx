import React from 'react'

export default function Demo() {
    //React.useState方法可以让函数式组件访问到state且可以修改值
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState("tom")
    //useEffect相当于componentDidMount钩子
    // React.useEffect(()=>{},[]) 数组里面可以监视state的改变，空数组则只会调用一次函数
    React.useEffect(() => {
        console.log(123);
        // setInterval(() => {
        //     setCount(count => count + 1)
        // }, 1000);
    }, [count, name])

    const add = () => {
        setCount(count => count + 1)

    }
    const changeName = () => {
        setName("jetty")
    }
    const show = () => {
        alert(myRef.current.value)
    }
    const myRef = React.useRef()
    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>count:{count}</h2>
            <h2>{name}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    )
}
