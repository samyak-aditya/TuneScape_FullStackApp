// TopPlay.js

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetPlaylistQuery, useGetArtistQuery } from '../redux/services/spotifyCore';
import Loader from './Loader';

const Track = ({ track, isPlaying, activeTrack, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeTrack?.uri === track?.uri ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{track?.name}</h3>
    
    <div className="flex-1 flex flex-row justify-between items-center">
      {track?.album?.images?.length > 0 && (
        <img className="w-20 h-20 rounded-lg" src={track?.album?.images[0]?.url} alt={track?.name} />
      )}
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/tracks/${track.uri}`}>
          <p className="text-xl font-bold text-white">
            {track?.name} sample
          </p>
        </Link>
        <p className="text-base text-gray-300 mt-1">
          {track?.artists?.map((artist) => artist.name).join(', ')}
        </p>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeTrack={activeTrack}
      track={track}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

// Rest of your imports...

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeTrack, isPlaying } = useSelector((state) => state.player);
  const { Adata, isFetching, error } = useGetArtistQuery();
  const { data } = useGetPlaylistQuery();
  
  
  console.log("topplay----> ",data);

  
  console.log("Artists ---->",Adata);
  
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const tracks = data?.data.album?.tracks?.items || [];

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (track, i) => {
    dispatch(setActiveSong({ track, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Playlist Tracks</h2>
          <Link to="/playlist">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {tracks.map((track, i) => (
            <Track
              key={track.uid}
              track={track}
              i={i}
              isPlaying={isPlaying}
              activeTrack={activeTrack}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(track, i)}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {Adata?.artists.map((artist, i) => (
            <SwiperSlide
              key={artist?.id}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
              i={i}
            >
              <Link to={`/artists/${artist?.id}`}>
                <img alt={artist.name} src={artist.images[0]?.url} className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );

  
};

export default TopPlay;
