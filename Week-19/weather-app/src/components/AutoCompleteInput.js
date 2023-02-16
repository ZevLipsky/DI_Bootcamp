import { useContext, useState } from "react";
import './AutoCompleteInput.css'
import { AppContect } from "../App";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const AutoCompleteInput = (props) => {
    const [autocities, setAutoCities] = useState([])

    const {setCity, setCountry, setCityKey} = useContext(AppContect)

    const getAutoCities = (queryString) => {
        if(queryString.length < 3){
            return
        }
        else{
        fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${queryString}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAutoCities(data)
        })
        .catch(err => {
            console.log(err);
        })
    }
    }
    return(

        <div className="AutoCompleteInput">
            <input type='text' onChange={(e)=>getAutoCities(e.target.value)} />
            <ul>
                {
                    autocities.map(item => {
                        return(
                            <li key={item.Key} onClick={()=>{
                                setCity(item.LocalizedName);
                                setCountry(item.Country.LocalizedName);
                                setCityKey(item.Key);
                                setAutoCities([]);
                            }}>
                                {item.LocalizedName}, 
                                {item.Country.LocalizedName}
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AutoCompleteInput;

