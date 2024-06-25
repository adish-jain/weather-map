// import React, { useState } from 'react';
// import ToggleSwitch from './ToggleSwitch';

// const CitySearch = ({ onCitySelect, onUnitChange }: { onCitySelect: (city: string) => void, onUnitChange: (unit: string) => void }) => {
//   const [city, setCity] = useState('');
//   const [error, setError] = useState('');
//   const [unit, setUnit] = useState('metric');

//   const handleSearch = () => {
//     if (city.trim()) {
//       onCitySelect(city);
//       setCity('');
//       setError('');
//     } else {
//       setError('Please enter a city name');
//     }
//   };

//   const toggleUnit = () => {
//     const newUnit = unit === 'metric' ? 'imperial' : 'metric';
//     setUnit(newUnit);
//     onUnitChange(newUnit);
//   };

//   return (
//     <div className="flex flex-col items-center w-full max-w-lg">
//       <div className="flex items-center space-x-2 w-full">
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className={`border p-2 rounded w-full ${error ? 'border-red-500' : 'border-gray-300'}`}
//           placeholder="Enter city name"
//         />
//         <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
//           Search
//         </button>
//         <ToggleSwitch unit={unit} toggleUnit={toggleUnit} />
//       </div>
//       <div className="h-6 mt-2 w-full">
//         {error && (
//           <div className="p-2 bg-red-100 text-red-700 rounded border border-red-400">
//             {error}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CitySearch;

import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import './CitySearch.css';

const CitySearch = ({ onCitySelect, onUnitChange }: { onCitySelect: (city: string) => void, onUnitChange: (unit: string) => void }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  const handleSearch = () => {
    if (city.trim()) {
      onCitySelect(city);
      setCity('');
      setError('');
    } else {
      setError('Please enter a city name');
    }
  };

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    onUnitChange(newUnit);
  };

  return (
    <div className="city-search">
      <div className="city-search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className={`city-search-input ${error ? 'error' : ''}`}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch} className="city-search-button">
          Search
        </button>
        <ToggleSwitch unit={unit} toggleUnit={toggleUnit} />
      </div>
      <div className="h-6 mt-2 w-full">
        {error && (
          <div className="city-search-error">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default CitySearch;
