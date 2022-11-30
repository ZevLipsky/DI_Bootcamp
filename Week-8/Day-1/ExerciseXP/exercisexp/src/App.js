import logo from './logo.svg';
import './App.css';
import UserFavoriteColors from './UserFavoriteColors'
import Ex4 from './Ex4';

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  return (
    <div>
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <UserFavoriteColors fav_animals={user.fav_animals}/>
      <Ex4 />
    </div>
  );
}

export default App;