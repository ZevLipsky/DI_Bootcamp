import { useEffect, useState } from 'react';
import './App.css';


const App= (props) => {
  const [text, setText] = useState('abc')

const handleChange = (e) => {
  setText(e.target.value)
}
useEffect(()=>{
  console.log(text);
})

  return (
    <div className="App">
      <header className="App-header">
        {text}
        <input type="text" onChange={handleChange} />
      </header>
    </div>
  );
}

export default App;
