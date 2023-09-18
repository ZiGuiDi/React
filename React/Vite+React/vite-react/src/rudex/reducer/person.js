const initState = [
    { id: "001", name: "jack", age: 18 }
]
const personReducer = (preState = initState, action) => {
    const { type, data } = action
    switch (type) {
        case "addPerson":
            return [data, ...preState]
        default:
            return preState
    }
}
export default personReducer