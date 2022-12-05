import {connect} from 'react-redux';

const Child = (props) => {
    return(
        <>
            <h1>Child Component</h1>
            <div>{props.my_text_one}</div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        my_text_one: state.property_one
    }
}
export default connect(mapStateToProps)(Child)