import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useDispatch } from 'react-redux';
import  MusicPlayer from './MusicPlayers/MusicPlayer.js'


  


const SongCard = ({ song, image, key, activeSong, artist, i, data, previewUrl }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-6 mb-6 ml-6 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.name === song.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
      <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
      <MusicPlayer songName={song.name} artistName={artist?.name} imageUrl={image} previewUrl={previewUrl} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
        <img alt="song_img" src={image ? image.url : ''} className="w-full h-full opacity-100 rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/`}>
            {song.name}
          </Link>
          
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
        {artist?.name}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
