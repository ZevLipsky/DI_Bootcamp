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
                        Something went wrong, we are working on in it, please wait
                    </p>
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary