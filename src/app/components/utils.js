import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

export const getWeatherIcon = (weather) => {
  switch (weather.toLowerCase()) {
    case 'clear sky':
      return <WiDaySunny className="text-yellow-500" size={24} />;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
      return <WiCloudy className="text-gray-500" size={24} />;
    case 'shower rain':
    case 'rain':
      return <WiRain className="text-blue-500" size={24} />;
    case 'thunderstorm':
      return <WiThunderstorm className="text-yellow-700" size={24} />;
    case 'snow':
      return <WiSnow className="text-blue-300" size={24} />;
    default:
      return <WiCloudy className="text-gray-500" size={24} />;
  }
};
