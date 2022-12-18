import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

      </nav>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contact' element ={<Contact id={12}/>}/>
    </Routes>
    </div>
  );
}

export default App;
