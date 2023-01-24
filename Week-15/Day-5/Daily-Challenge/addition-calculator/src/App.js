
import { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);


  function addition(){
      setTotal(number1 + number2);
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      

      <div className="number-inputs">
        <input 
        type="number" 
        placeholder="0" 
        value={number1} 
        onChange={e => setNumber1(+e.target.value)}
        />
        <input 
        type="number" 
        placeholder="0" 
        value={number2}
        onChange={e => setNumber2(+e.target.value)}
        />
      </div>

      <button onClick={addition} >Add Them!</button>
    

    <h2>{total}</h2>
    </div>
  );
}

export default App;
