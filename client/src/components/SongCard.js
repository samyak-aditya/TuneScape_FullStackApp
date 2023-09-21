import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = ({ song, image,key }) => {
  return (
    <div className="flex flex-col w-[250px] p-6 mb-6 ml-6 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${image ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          
        </div>
        <img alt="song_img" src={image ? image.url : ''} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/`}>
            {song.name}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {/* Add your song subtitle or artist information here */}
        </p>
      </div>
    </div>
  );
};

export default SongCard;
