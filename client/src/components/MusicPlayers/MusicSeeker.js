import React from 'react';

const MusicSeeker = ({ currentTime, duration, onSeek }) => {
  const seekPercentage = (currentTime / duration) * 100 || 0;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleSeekChange = (e) => {
    const newSeekTime = (e.target.value / 100) * duration;
    onSeek(newSeekTime);
  };

  return (
    <div className="music-seeker">
      <div className="music-seeker-bar">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSeekChange} // Allow users to interact with the seeker
          className="music-seeker-slider"
        />
        <div
          className="music-seeker-progress"
          style={{ width: `${seekPercentage}%` }}
        ></div>
      </div>
      <div className="music-seeker-time">
        <span className="music-seeker-current-time">{formatTime(currentTime)}</span>
        <span className="music-seeker-duration">{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default MusicSeeker;
