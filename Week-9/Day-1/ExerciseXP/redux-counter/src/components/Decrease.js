import {connect} from 'react-redux';
import {DECREASE_COUNT} from '../actions/index.js';

const Decrease = (props) => {
  console.log(props);
  return (
    <button onClick={()=> props.dispatch({type:DECREASE_COUNT})}> - </button>
  )
}
export default connect()(Decrease)
