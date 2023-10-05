import React, { useState } from 'react';
import SongCard from './SongCard';

const ParentComponent = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handlePlayClick = (song) => {
    if (currentlyPlaying === song) {
      // Clicked the same song, toggle pause/play
      setCurrentlyPlaying(null); // Stop the currently playing song
    } else {
      // Clicked a different song
      setCurrentlyPlaying(song);
    }
  };

  return (
    <div>
      {yourDataArray.map((song) => (
        <SongCard
          
          song={song}
          isPlaying={currentlyPlaying === song}
          onPlayClick={() => handlePlayClick(song)}
        />
      ))}
    </div>
  );
};

export default ParentComponent;
