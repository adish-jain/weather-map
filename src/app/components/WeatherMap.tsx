import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import WeatherMarker from './WeatherMarker';
import PlaybackControl from './PlaybackControl';
import WeatherDetails from './WeatherDetails';

const Map = dynamic(() => import('react-map-gl').then(mod => mod.Map), { ssr: false });

const WeatherMap = ({ city, unit }: { city: string, unit: string }) => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return;

      setLoading(true);
      setError('');
      try {
        const weatherResponse = await axios.get(`/api/weather`, {
          params: { city, units: unit },
        });
        setWeather(weatherResponse.data);

        const forecastResponse = await axios.get(`/api/forecast`, {
          params: { city, units: unit },
        });
        setForecast(forecastResponse.data);
      } catch (error) {
        setError('Error fetching data. Please check the city name and try again.');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, unit]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (playing) {
      timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % (forecast ? forecast.list.length : 1));
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [playing, forecast]);

  useEffect(() => {
    setIndex(0); // Reset the index when a new forecast is loaded
  }, [forecast]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(parseInt(e.target.value, 10));
  };

  if (error) {
    return <p className="text-red-500 absolute top-4 left-4">{error}</p>;
  }

  if (!weather || !forecast) return null;

  return (
    <div className="w-full h-full absolute inset-0">
      <Map
        key={weather.coord.lat + weather.coord.lon}
        initialViewState={{
          longitude: weather.coord.lon,
          latitude: weather.coord.lat,
          zoom: 8,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      >
        <WeatherMarker weather={weather} unit={unit} />
      </Map>
      <div className="absolute top-4 right-4 z-10 flex flex-col space-y-4">
        <PlaybackControl
          playing={playing}
          handlePlayPause={handlePlayPause}
          handleSeek={handleSeek}
          forecastLength={forecast.list.length}
          index={index}
        />
        <WeatherDetails forecast={forecast} index={index} unit={unit} />
      </div>
      {loading && <ClipLoader color="#3b82f6" loading={loading} size={50} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
    </div>
  );
};

export default WeatherMap;
