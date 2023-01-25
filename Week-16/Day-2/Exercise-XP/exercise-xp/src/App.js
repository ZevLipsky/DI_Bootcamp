import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BuggyCounter />
        <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        
       
      </header>
    </div>
  );
}

export default App;
