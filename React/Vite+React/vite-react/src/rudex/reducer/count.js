const initState = 0
const reducer = (preState = initState, action) => {
    const { type, data } = action
    switch (type) {
        case 'INCREMENT':
            return preState + data

        default:
            return preState
    }
}
export default reducer;