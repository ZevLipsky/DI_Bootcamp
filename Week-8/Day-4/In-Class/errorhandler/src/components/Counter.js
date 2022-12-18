import React from 'react';
import react from 'react'

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
    add = () =>{
        this.setState({count:this.state.count + 1})
    }
    render(){
        if(this.state.count > 5){
            throw Error('Crashed....')
        }
        return(
            <>
            {this.state.count}
            <button onClick={this.add}>Add</button>
            </>
        )
    }
}
export default Counter