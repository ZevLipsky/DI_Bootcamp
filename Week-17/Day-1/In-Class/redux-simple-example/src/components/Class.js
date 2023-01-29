import React from 'react';
import ClassSubHeader from './ClassSubHeader';

import {connect} from 'react-redux';
import { changeHeader } from '../redux/actions';

class Class extends React.Component{
    constructor(){
        super()
        this.state = {
            text: 'Simple Redux Example',
            text_two: 'Welcome Redux'
        }
    }
    render(){
        return(
        <div>
            {/* <h1>{this.state.text}</h1> */}
            <h1>{this.props.a}</h1>
            <div>
            Change Header: <input type="text" onChange={(e) => this.props.b(e)}/>
            </div>
            <ClassSubHeader />
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        a:state.header 
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        b: (e) => dispatch(changeHeader(e.target.value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Class)