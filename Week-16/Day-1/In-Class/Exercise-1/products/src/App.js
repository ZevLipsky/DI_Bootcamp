import Products from './products.js';
import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary.js';
// import Parent from './Parent.js';
// import Child from './Child.js';
import Counter from './Counter.js';
class App extends React.Component {
  constructor(){
    super()
    this.state={
      // name: '',
      // username: '',
      // pass: ''
    }
  }

  // handleChange = (e) => {
  //   this.setState({[e.target.name]:e.target.value})
  // }

  // handleChangeUsername = (e) => {
  //   this.setState({username:e.target.value})
  // }
  
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log( 'Name', this.state.name, 'Username:', this.state.username);

  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
       <Products />
        </header>
        {/* <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name = "name" onChange={this.handleChange} />
          <br/>
          Username: <input type="text" name = "username" onChange={this.handleChange} />
          <input type="submit"  value="submit" />
        </form> */}
        {/* <Parent auth = "admin">
        <Child />
        </Parent> */}
        {/* <ErrorBoundary>
        <Counter/>
        </ErrorBoundary>
        
         
        <Counter /> */}
      </div>
    );
  }

}

export default App;
