// Exercise 1
// Instructions
// Part III : Garage
// Create another component inside your Components folder, called Garage.js.
// Use an attribute to pass a size to the Garage component, <Garage size="small" />.
// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?

import React from "react";

class Garage extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        const {size} = this.props
        return (
            <p>Who lives in my {size} Garage?</p>
        )
    }
}

export default Garage;