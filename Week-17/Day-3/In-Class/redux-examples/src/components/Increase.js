import {connect} from 'react-redux';
import {increase_count} from '../redux/action'



const Increase = (props) => {
    return(
        <button onClick={()=>props.add_one()}>+</button>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        add_one: () =>dispatch(increase_count())
    }
}


export default connect(null, mapDispatchToProps)(Increase);