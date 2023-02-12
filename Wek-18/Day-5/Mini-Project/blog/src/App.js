import logo from './logo.svg';
import './style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Post from './components/Post';
import { HomeContext } from './components/Home';
import { useContext ,createContext,useState} from 'react';

export const AppContext=createContext();
function App() {
  const [postNum, setPostNum] = useState(0);
  
  return (
    <><BrowserRouter>
    <AppContext.Provider value={{postNum,setPostNum}}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path={`/1`} element={<Post/>}/>
      <Route path={`/2`} element={<Post/>}/>
      <Route path={`/3`} element={<Post/>}/>
    </Routes>
    </AppContext.Provider>
    </BrowserRouter>
    </>
    
  );
}

export default App;