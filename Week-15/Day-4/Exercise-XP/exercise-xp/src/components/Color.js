// Exercise 4
// Instructions
// Create a new Class Component named Color. The state object of this component contains a property favoriteColor which value is “red”.
// Output the value in a header tag.
// Use the componentDidMount() method to call a timeout function, that changes the state of the favoriteColor property to “yellow” after 5 seconds.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.

import React from "react";

class Color extends React.Component {
    constructor() {
        super();
        this.state = {
            favoriteColor: "red"
        }
    }

    componentDidMount = () => {
        setTimeout( () => 
        this.setState({favoriteColor: "yellow"}) 
        ,5000)
    }

    changeColor = () => {
        this.setState({favoriteColor: "blue"});
    }

    render() {
        return (
            <div>
                <h1>{`My Favorite Color is ${this.state.favoriteColor}`}</h1>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default Color;