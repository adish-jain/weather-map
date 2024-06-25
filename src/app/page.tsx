"use client";

import { useState } from 'react';
import CitySearch from './components/CitySearch';
import WeatherMap from './components/WeatherMap';
import './Home.css';

const Home = () => {
  const [unit, setUnit] = useState('metric');
  const [city, setCity] = useState('');

  const handleCitySelect = (city: string) => {
    setCity(city);
  };

  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit);
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <CitySearch onCitySelect={handleCitySelect} onUnitChange={handleUnitChange} />
      </div>
      <WeatherMap city={city} unit={unit} />
    </div>
  );
};

export default Home;
