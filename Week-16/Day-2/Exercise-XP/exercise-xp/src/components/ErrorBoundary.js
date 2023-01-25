// In another Javascript file, create the ErrorBoundary class component, it will hold an error property in the state. The error value is set to null.
// // Use the componentDidCatch() method to set the value of the error property.
// // Render an error message with some details. (We will use this component to wrap the BuggyCounter component in our below simulations) -->
import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state = {
            err:null
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        this.setState({err:error})
    }
    render(){
        if(this.state.err){
            return(
                <>
                    <p>
                        Something went wrong, we are working on it.
                    </p>
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary