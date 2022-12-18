import Counter from './components/Counter'
// import Parent from './components/Parent'
// import Child from './components/Child'
import ErrorBoundray from './ErrorBoundary'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Parent username ='user1'>
        <Child/>
       </Parent>
        */}
        <ErrorBoundray>
          <Counter/>
          <Counter/>
        </ErrorBoundray>
        <Counter/>
        <Counter/>
      </header>  
    </div>
  );
}

export default App;
