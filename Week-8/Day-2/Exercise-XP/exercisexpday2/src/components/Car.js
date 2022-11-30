
// Exercise 1 
// Instructions
// Part I : A Car Component
// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};
// In your React app create a new folder in the src path, name it Components. It should contain a Class Component named Car.js.
// In the Car.js component render a header with the carInfo model, for example This car is <model>.
// Import the Car.js component to the App.js.
// Part II : A constructor function
// Create a constructor function in the Car component, and add a color property in the state.
// Display the color property in the render() method, for example This car is <color> <model>.
import React from "react";
import Garage from "./Garage";

class Car extends React.Component {
    constructor(color) {
        super()
        this.color = "blue";
    }
    render() {
        const {name, model} = this.props;
        return (
            <div>
                <h1>This car is a {this.color} {model}</h1>
                <Garage size="small"/>
            </div>
        )
    }
}

export default Car;