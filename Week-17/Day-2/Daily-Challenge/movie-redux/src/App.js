import MovieDetail from './components/MovieDetail';
import MovieList from './components/MovieList';import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
        <MovieDetail />
      </header>
    </div>
  );
}

export default App;
