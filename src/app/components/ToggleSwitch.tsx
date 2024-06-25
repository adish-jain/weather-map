// import React from 'react';

// const ToggleSwitch = ({ unit, toggleUnit }: { unit: string, toggleUnit: () => void }) => {
//   return (
//     <div className="flex items-center">
//       <span className="mr-2 text-gray-700">{unit === 'metric' ? 'Metric' : 'Imperial'}</span>
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input type="checkbox" className="sr-only" checked={unit === 'imperial'} onChange={toggleUnit} />
//         <div className="w-11 h-6 bg-gray-200 rounded-full border-2 border-transparent transition duration-200 ease-in-out">
//           <div className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition transform ${unit === 'imperial' ? 'translate-x-full bg-blue-500' : 'translate-x-0'}`}></div>
//         </div>
//       </label>
//     </div>
//   );
// };

// export default ToggleSwitch;

import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ unit, toggleUnit }: { unit: string, toggleUnit: () => void }) => {
  return (
    <div className="toggle-switch">
      <span className="toggle-switch-label">{unit === 'metric' ? 'Metric' : 'Imperial'}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="toggle-switch-input" checked={unit === 'imperial'} onChange={toggleUnit} />
        <div className="toggle-switch-container">
          <div className={`toggle-switch-dot ${unit === 'imperial' ? 'checked' : ''}`}></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
