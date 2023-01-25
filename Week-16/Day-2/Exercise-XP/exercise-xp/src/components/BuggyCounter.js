// <!-- In the App.js file create a class component named BuggyCounter.

// This component :
// will hold a counter property in the state. The counter value starts at 0.
// will render the counter. Every time the users clicks on it, the function handleClick() will be called, and add +1 to the counter property.

// If the counter reaches 5, you will throw an error ‘I crashed!’

// In another Javascript file, create the ErrorBoundary class component, it will hold an error property in the state. The error value is set to null.
// Use the componentDidCatch() method to set the value of the error property.
// Render an error message with some details. (We will use this component to wrap the BuggyCounter component in our below simulations) -->
import React from "react";

class BuggyCounter extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () =>{
        this.setState({count:this.state.count+1})
    }
    render(){
        if(this.state.count > 5){
            throw Error ('I crashed!')

        }
       
        return(
            <>
                <h4>{this.state.count}</h4>
                <button onClick={this.handleClick}>Add</button>
            
            </>
        )
    }
}
export default BuggyCounter;