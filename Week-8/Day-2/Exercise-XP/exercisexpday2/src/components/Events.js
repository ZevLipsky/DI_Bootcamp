// Exercise 2 
// Instructions
// Part I:
// Create a new Class component named Events.
// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
// In the render() method, create a button that when clicked on, calls the clickMe function.
// Tip: Use event handler.
// Where should you create the clickMe function ?
// Part II:
// In the render() method of the Events Class component, create an input tag that has an onKeyPress event handler, that listens to a function called handleKeyPress.
// When you type something in the input field and press the ‘Enter key’, the handleKeyPress function will check if the ‘Enter key’ was pressed and will alert a message with the input text value::
// Part III:
// In the Events Class component, declare a property in the state object named isToggleOn and set it to true.
// In the render() method, create a button that has an onClick event that will switch the state property between ‘ON’ and ‘OFF’
// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn property.

import React from "react";

class Events extends React.Component {
    constructor() {
        super()
        this.state = {
            isToggleOn: true,
            value: "ON"
        }
    }

    clickMe = (event) => {
        alert("I was clicked");
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            alert(`The Enter key was pressed, your input is: ${event.target.value}`)
        }
    }
    
    toggle = (event) => {
        event.preventDefault();
        if (this.state.isToggleOn === true) {
            this.setState({isToggleOn: false, value: "OFF"});
        }  else if (this.state.isToggleOn === false) {
            this.setState({isToggleOn: true, value: "ON"});
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.clickMe}>Click Me!</button><br/>
                <input type="text" onKeyPress={this.handleKeyPress} /><br/>
                <button onClick={this.toggle}>{this.state.value}</button>
            </div>
        )
    }
}

export default Events;