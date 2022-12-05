import {connect} from 'react-redux';
import {increase_count,decrease_count} from '../actions/index.js';
import Increase from './Increase'
import Decrease from './Decrease'
const Counter = (props) => {
  return(
    <div>
      <Decrease/>
      {props.count}
      <Increase/>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    count: state.count
  }
}
// const mapDispatchToProps = (dispatch) =>{
//   return{
//     increase: () => dispatch(increase_count()),
//     decrease: () => dispatch(decrease_count())
//    }
// }
export default connect(mapStateToProps)(Counter)
