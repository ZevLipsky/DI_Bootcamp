// Exercise 3
// Instructions
// Part I : Phone
// Create a new Class Component named Phone. Use constructor, super(), and a state object with the following properties:
// In the render method of the Phone component, display the values of the state properties. Tip: this.state.propertyname
// Import the Phone component and display it in your App.js.
// Part II : Change the Phone
// In the Phone component create a function named changeColor that updates the color property to ‘blue’
// In the render() method of the Phone component, add a button with an onClick event that will call the changeColor function to change the color property.

import React from "react";

class Phone extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }

    changeColor = () => {
        this.setState({color: "blue"})
    }

    render() {
        return (
            <div>
                <h1>{`My phone is a ${this.state.brand}`}</h1>
                <p>{`It is a ${this.state.color} ${this.state.model} from ${this.state.year}`}</p>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}

export default Phone;