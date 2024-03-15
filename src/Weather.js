import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState ({});
    
function handleResponse(response){
    console.log(response.data);
    setWeatherData({
        
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
    });
    
    setReady(true);
}

if (ready){
return ( <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input 
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autoFocus="on" />
            </div>
            <div className="col-3">
            <input 
            type="submit"
            value="Search"
            className="btn btn-primary w-100" />
            </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                Wednesday 7:00
            </li>
            <li>
                {weatherData.description}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
            <img src={weatherData.iconUrl}
                     alt={weatherData.description} />
         <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span className="unit">°C</span>
            </div>
            
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity} %</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );

}

else{
 const apiKey = "49b631c45785fe73d2a88477803dea22";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";
}

   
}
