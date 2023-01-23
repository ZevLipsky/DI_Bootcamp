import React from "react"
import Garage from "./Garage";
const carinfo = {name: "Ford", model: "Mustang"}

class Car extends React.Component{
constructor(){
    super();
    this.state = { color: "red"};
}

    render(){
        return(
            <>
            <header>This car is a {carinfo.model} </header>
            <p>This car is {this.state.color}</p>
            <p>Garage Compenent:</p>
            <Garage size= "small"/>
            </>
        )
    }
}

export default Car;