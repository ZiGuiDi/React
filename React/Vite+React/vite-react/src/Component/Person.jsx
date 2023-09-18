import PropTypes from 'prop-types';
import { useRef } from 'react';
import { nanoid } from 'nanoid'
export default function Person(props) {
    const { person, personList } = props
    Person.propTypes = {
        person: PropTypes.array.isRequired,
        personList: PropTypes.func.isRequired
    }
    const addPerson = () => {
        const name = nameRef.current.value
        const age = ageRef.current.value
        console.log(nanoid());
        personList({ id: nanoid(), name, age })
    }
    const nameRef = useRef(null)
    const ageRef = useRef(null)

    return (
        <div>
            <h1>List组件</h1>
            <input type="text" ref={nameRef} />&nbsp;
            <input type="text" ref={ageRef} />&nbsp;
            <button onClick={addPerson}>添加人</button>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {person.map((item) => {
                    return <li key={item.id}>{item.name}---{item.age}</li>
                })}
            </ul>
        </div>
    )
}
