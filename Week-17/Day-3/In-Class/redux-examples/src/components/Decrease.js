import { connect, Connect } from "react-redux";
import { decrease_count } from "../redux/action";


const Decrease = (props) => {
    return(
        <button onClick={()=>props.minus_num(1)}>-</button>
    )
}

const mapStateToProps = state => {
    return{
        num: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return{
        minus_num: (num) => dispatch(decrease_count(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps ) (Decrease);