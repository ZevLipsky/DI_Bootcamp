import './App.css';
import Car from "./components/CarComponents"
import Events from './components/Events';
import Phone from './components/Phone';
import Color from './components/Color';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car  />
        <Events />
        <Phone />
        <Color />
      </header>
    </div>
  );
}

export default App;