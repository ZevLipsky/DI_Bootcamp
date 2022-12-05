import {connect} from 'react-redux';
import {INCREASE_COUNT} from '../actions/index.js';
const Increase = (props) => {
  return (
    <button onClick={()=> props.dispatch({type:INCREASE_COUNT})}> + </button>
  )
}
export default connect()(Increase)
