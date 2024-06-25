import React from 'react';
import { FiPlay, FiPause } from 'react-icons/fi';
import './PlaybackControl.css';

const PlaybackControl = ({ playing, handlePlayPause, handleSeek, forecastLength, index }: { playing: boolean, handlePlayPause: () => void, handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void, forecastLength: number, index: number }) => {
  return (
    <div className="playback-control">
      <button onClick={handlePlayPause}>
        {playing ? <FiPause size={24} /> : <FiPlay size={24} />}
        <span>{playing ? 'Pause' : 'Play'}</span>
      </button>
      <input
        type="range"
        min="0"
        max={forecastLength - 1}
        value={index}
        onChange={handleSeek}
      />
    </div>
  );
};

export default PlaybackControl;
