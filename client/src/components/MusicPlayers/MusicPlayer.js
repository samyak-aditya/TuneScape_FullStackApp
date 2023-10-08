import React, { useState, useEffect } from 'react';
import MusicSeeker from './MusicSeeker';

const MusicPlayer = ({ previewUrl, songName, artistName, imageUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(previewUrl));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Function to update the seeker value
  const updateSeeker = () => {
    setCurrentTime(audio.currentTime);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleSeek = (seekTime) => {
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    const pauseHandler = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('pause', pauseHandler);
    audio.addEventListener('timeupdate', () => {
      setDuration(audio.duration);
    });

    // Set an interval to update the seeker every 100 milliseconds (or adjust as needed)
    const seekerInterval = setInterval(updateSeeker, 100);

    return () => {
      audio.removeEventListener('pause', pauseHandler);
      clearInterval(seekerInterval); // Clear the interval on component unmount
    };
  }, [audio]);

  return (
    <div className="music-player">
      <img src={imageUrl} alt="Album Art" className="album-art" />
      <div className="song-info">
        <p className="song-name">{songName}</p>
        <p className="artist-name">{artistName}</p>
      </div>
      <div className="music-controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <MusicSeeker
          currentTime={currentTime}
          min={0}
          duration={duration}
          onSeek={handleSeek}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
