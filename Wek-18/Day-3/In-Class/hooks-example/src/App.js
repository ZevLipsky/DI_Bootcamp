import { useState, createContext } from 'react';
// import Text from './components/Text'
import './App.css';
// import Count from './components/Count';
import Calculator from './components/Calculator';


export const AppContext = createContext(null);

function App() {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
    {/* <AppContext.Provider value={{count, setCount}}>
      <Count />
      </AppContext.Provider> */}
      <Calculator />

      </header>
    </div>
  );
}

export default App;
