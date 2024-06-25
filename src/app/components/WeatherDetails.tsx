import React from 'react';
import { getWeatherIcon } from './utils';
import './WeatherDetails.css';

const WeatherDetails = ({ forecast, index, unit }: { forecast: any, index: number, unit: string }) => {
  const temperatureUnit = unit === 'metric' ? '°C' : '°F';
  const weatherIcon = getWeatherIcon(forecast.list[index].weather[0].description);

  return (
    <div className="weather-details">
      <h2>{forecast.city.name}</h2>
      <div className="icon">
        {weatherIcon}
      </div>
      <p>{forecast.list[index].dt_txt}</p>
      <p className="temperature">Temperature: {forecast.list[index].main.temp}{temperatureUnit}</p>
      <p className="description">{forecast.list[index].weather[0].description}</p>
    </div>
  );
};

export default WeatherDetails;
