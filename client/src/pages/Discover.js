import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from '../assets/constants';
import { useGetDiscoverQuery, useGetGenreQuery } from "../redux/services/spotifyCore";

const Discover = () => {
  const { data, isFetching, error } = useGetDiscoverQuery();
  const genreTitle = 'Pop';

  console.log('Discover Data --> ', data);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        
        <select 
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks.map((track, i) => (
          <div key={track.id} className="album-card">
            <div className="relative">
              
            </div>
            <SongCard
              key={track.id}
              song={track}
              image={track.album.images[0]}
              artist = {track.artists[0]}
              i={i}
              data={'pop'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
