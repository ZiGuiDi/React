import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { personAddAction } from "../../redux/actions/person"
import { connect } from "react-redux"
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const person = { id: nanoid(), name, age }
        // console.log(this.props.addPerson(person));
        this.props.addPerson(person)
    }
    render() {
        return (
            <div>
                <h2>我是Person组件</h2>
                <h2>count组件的数据为:{this.props.count}</h2>
                <input type="text" placeholder='请输入姓名' ref={c => this.nameNode = c} />&nbsp;
                <input type="text" placeholder='请输入年龄' ref={c => this.ageNode = c} />&nbsp;
                <button onClick={this.addPerson}>添加Person</button>
                <ul>
                    {this.props.person.map(item => {
                        return <li key={item.id}>名字:{item.name}&nbsp;年龄:{item.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default connect((state) => ({
    person: state.person,
    count: state.count
}),
    {
        addPerson: personAddAction
    }

)(Person)
