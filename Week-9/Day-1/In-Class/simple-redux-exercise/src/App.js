import React from 'react';
import Child from './Child';
import {connect} from 'react-redux';
import { changePropOne } from './actions';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      property_one: "property one",
      property_two: "property two"
    }
  }

  handleChange = (e) =>{
    this.setState({property_one:e.target.value});
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
       <h2>Simple REdux Example</h2>
       <div> Proper One: {this.state.property_one}</div>
       <input type="text" onChange={this.handleChange}/>

       <div>Property one from store: {this.props.my_one}</div>
       <input type='text' onChange={this.props.myChange}/>

       <div>Text one from store: {this.props.my_text}</div>
       <div>Property Two: {this.state.property_two}</div>
       <Child/>
      </header>
      
    </div>
  );
  }
}

const mapStateToProps = (state) => {
  return{
    my_one: state.property_one,
    my_text: state.text1,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    myChange : (e)=> dispatch(changePropOne(e.target.value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
