import Increase from "./Increase";
import Decrease from "./Decrease";

import {connect} from 'react-redux';

const Counter = (props) => {
    return(
        <div>
            <Decrease />
            {props.count_view}
            <Increase />
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        count_view: state.count
    }
}

export default connect(mapStateToProps)(Counter);