
import React from 'react';

const Weather = (props) => {

  return (
      <div>
        <h2>Current Weather:</h2>
        <ul>
          <li>Temp: {props.weather && props.weather.main && props.weather.main.temp}</li>
          <li>Humidity: {props.weather && props.weather.main && props.weather.main.humidity}</li>
          <li>Pressure: {props.weather && props.weather.main && props.weather.main.pressure}</li>
        </ul>      
      </div>
    )

};


export default Weather;


