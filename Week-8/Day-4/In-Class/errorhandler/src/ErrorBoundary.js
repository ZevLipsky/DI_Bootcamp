import React from 'react'

class ErrorBoundray extends React.Component{
    constructor(){
        super()
    }

    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render(){
        return this.props.children
    }
}

export default ErrorBoundray