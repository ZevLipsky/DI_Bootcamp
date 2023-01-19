import logo from './logo.svg';
import './App.css';
import Nojsx from './Exercise1';
import JSX from './Exercise2';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteColors animals={user.favAnimals} />
        <Nojsx />
        <JSX />
        <Exercise4 />
      </header>
    </div>
  );
}

export default App;
