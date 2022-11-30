import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//ex1
const myelement = React.createElement('h1', {}, 'I do not use JSX!');
const myelement2=<h1>I love JSX!</h1>
const sum=5+5;

 const root = ReactDOM.createRoot(document.getElementById('root'));
// //ex1
//  root.render( 
//  myelement
// );

// //ex2
// root.render(
/* <h1>hello world!</h1> */
// myelement2
/* <h2>React is {sum} times better with JSX</h2> */
// );

// ex3
root.render(
  <App />
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();