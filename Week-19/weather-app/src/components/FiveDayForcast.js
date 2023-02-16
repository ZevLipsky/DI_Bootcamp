import { useContext, useState, useEffect } from "react";
import { AppContect } from "../App";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;



const FiveDayForcast = (props) => {
    const [forcast, setForcast] = useState({});
    const { cityKey } = useContext(AppContect)

    useEffect(()=>{
        getForcastWeather(cityKey)

    },[cityKey])

    const getForcastWeather = (key) => {
        fetch(`${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setForcast(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    if(!forcast.DailyForecasts) return null;
    return(

        <div>

           <h4>Five Day Forcast</h4>
           {
                forcast.DailyForecasts.map((item, index)=> {
                    return(
                        <div key={index} style={{display: 'inline-block', border: '1px solid #ccc', margin: '10px'}} >
                            <h4>{item.Temperature.Minimum.Value}</h4>
                            <h4>{item.Temperature.Maximum.Value}</h4>
                        </div>
                    )
                })
           }
        </div>
    )
}

export default FiveDayForcast;