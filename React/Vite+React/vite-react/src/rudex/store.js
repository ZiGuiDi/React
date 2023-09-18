import { legacy_createStore, combineReducers } from "redux"
import countReducer from "./reducer/count"
import personReducer from "./reducer/person"
const allReducer = combineReducers({
    count: countReducer,
    person: personReducer
})
export default legacy_createStore(allReducer)