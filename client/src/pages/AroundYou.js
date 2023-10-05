import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTracksQuery } from '../redux/services/spotifyCore';

const CountryTracks = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTracksQuery();

  if (isFetching) return <Loader title="Loading Songs around you..." />;
  if (error) return <Error />;
  
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black">Listen to something Random</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks.map((track, i) => (
          <SongCard
            key={data.tracks[0].album.id} // Use track.id as the key
            song={data.tracks[0].album} // Pass the entire track object to SongCard
            isPlaying={isPlaying}
            activeSong={activeSong}
            image = {data.tracks[0].album.images[0]}
            artist = {data.tracks[0].album.artists[i]}
            previewUrl={data.tracks[0].preview_url}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
