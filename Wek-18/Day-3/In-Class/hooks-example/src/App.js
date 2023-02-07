import { useState, createContext } from 'react';
import Text from './components/Text'
import './App.css';

export const AppContext = createContext(null);

function App() {
  const [txt, setTxt] = useState('Some text');
  return (
    <div className="App">
      <header className="App-header">
    <AppContext.Provider value={{txt, setTxt}}>
      <Text />
      </AppContext.Provider>

      </header>
    </div>
  );
}

export default App;
