import './App.css';
import { useState, createContext } from 'react';

import AutoCompleteInput from './components/AutoCompleteInput';
import FiveDayForcast from './components/FiveDayForcast';
import CurrentWeather from './components/CurrentWeather';

export const AppContect = createContext(null)


function App() {
  const [city, setCity] = useState('Tel Aviv')
  const [country, setCountry] = useState('Israel')
  const [cityKey, setCityKey] = useState(215854)
  return (
    <AppContect.Provider value={{
      city, setCity, country, setCountry, cityKey, setCityKey
    }}>

    <div className="App">

      <AutoCompleteInput />
      <CurrentWeather />
      <FiveDayForcast />
   
    </div>
   </AppContect.Provider>
  );
}

export default App;
