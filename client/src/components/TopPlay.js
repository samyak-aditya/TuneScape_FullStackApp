import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetPodcastQuery } from '../redux/services/spotifyCore';
import 'swiper/css';
import 'swiper/css/free-mode';

const TopPodcast = ({ episode, i, isPlaying, activeEpisode, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeEpisode?.name === episode?.name ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={episode?.coverArt?.sources[0].url} alt={episode?.name} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/episodes/${episode.uri}`}>
          <p className="text-xl font-bold text-white">
            {episode?.name}
          </p>
        </Link>
        <p className="text-base text-gray-300 mt-1">
          {episode?.description}
        </p>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeEpisode={activeEpisode}
      episode={episode}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeEpisode, isPlaying } = useSelector((state) => state.player);
  const { data: podcastData } = useGetPodcastQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const topPodcasts = podcastData?.podcastUnionV2?.items || [];

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (episode, i) => {
    dispatch(setActiveSong({ episode, data: podcastData, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Podcast Episodes</h2>
          <Link to="/top-podcasts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPodcasts.map((episode, i) => (
            <TopPodcast
              key={episode.uid}
              episode={episode}
              i={i}
              isPlaying={isPlaying}
              activeEpisode={activeEpisode}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(episode, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
