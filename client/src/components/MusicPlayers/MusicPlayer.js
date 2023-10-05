import React, { useState, useEffect } from 'react';
import MusicSeeker from './Seekbar'; // Assuming MusicSeeker is in a separate file

const MusicPlayer = ({ previewUrl, songName, artistName, imageUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(previewUrl));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
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
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    });

    return () => {
      audio.removeEventListener('pause', pauseHandler);
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
          duration={duration}
          onSeek={handleSeek}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
