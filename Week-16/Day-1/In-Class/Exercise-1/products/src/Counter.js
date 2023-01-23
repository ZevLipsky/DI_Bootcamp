import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    add = () =>{
        this.setState({count:this.state.count+1})
    }
    render(){
        if(this.state.count > 5){
            throw Error ('crashed...!!!')
        }
        return(
            <>
                <h4>{this.state.count}</h4>
                <button onClick={this.add}>Add</button>
            
            </>
        )
    }
}
export default Counter;