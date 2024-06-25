import React from 'react';
import { Marker } from 'react-map-gl';
import { getWeatherIcon } from './utils';
import './WeatherMarker.css';

const WeatherMarker = ({ weather, unit }: { weather: any, unit: string }) => {
  return (
    <Marker longitude={weather.coord.lon} latitude={weather.coord.lat}>
      <div className="weather-marker">
        <div className="icon">
          {getWeatherIcon(weather.weather[0].description)}
        </div>
        <span>{weather.main.temp}°{unit === 'metric' ? 'C' : 'F'}</span>
        <span className="description">{weather.weather[0].description}</span>
      </div>
    </Marker>
  );
};

export default WeatherMarker;
