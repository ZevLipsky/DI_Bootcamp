import { useContext, useState, useEffect } from "react";
import { AppContect } from "../App";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const CurrentWeather = (props) => {
    const [current, setCurrent] = useState([]);
    const {city, cityKey, country} = useContext(AppContect)

    useEffect(()=>{
        getCurrentWeather(cityKey)
    },[cityKey])

const getCurrentWeather = (key) => {
    fetch(`${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        setCurrent(data)
    })
    .catch(err => {
        console.log(err);
    })
}

    if (current.length === 0) return null;
    return(

        <div>
        <h4>Current Weather</h4>
        <h5>{city}</h5>
        <h5>{country}</h5>  
        <h4>{current[0].Temperature.Metric.Value}</h4>
        <p>{current[0].WeatherText}</p>
        <img src={`https://developer.accuweather.com/sites/default/files/${current[0].WeatherIcon<10?'0'+current[0].WeatherIcon:current[0].WeatherIcon}-s.png`} ></img>


        </div>
    )
}

export default CurrentWeather;