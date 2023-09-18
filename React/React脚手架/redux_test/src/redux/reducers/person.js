import { ADDPERSON } from "../constant"
const initState = [{ id: "001", name: "tom", age: 12 }]
export default function personReducer(preState = initState, action) {

    const { type, personsObj } = action
    switch (type) {
        case ADDPERSON:
            return [personsObj, ...preState]

        default:
            return preState;
    }
}