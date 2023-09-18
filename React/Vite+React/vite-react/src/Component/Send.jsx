// import { getDate } from "../API";
import PropTypes from 'prop-types';

function Send(props) {
    const { count: { count }, add } = props
    //用来设定props传过来的类型
    Send.propTypes = {
        count: PropTypes.object.isRequired,
        add: PropTypes.func.isRequired
    }

    const adds = async () => {
        // const result = await getDate()
        add(1)
    }
    return (
        <div>
            <h1>我是Send组件</h1>
            <h1>count:{count}</h1>
            <button onClick={adds}>+</button>
        </div>
    )
}

export default Send
