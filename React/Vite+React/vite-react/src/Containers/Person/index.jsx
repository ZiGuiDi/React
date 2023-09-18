import { connect } from "react-redux"
import List from "../../Component/Person"
import { PERSON } from "../../rudex/action/person"
const personList = connect(state => {
    return { person: state.person }
}, {
    personList: PERSON
})(List)
export default personList