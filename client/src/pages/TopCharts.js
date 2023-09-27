// TopCharts.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetPodcastQuery } from '../redux/services/spotifyCore';

const TopCharts = () => {
  const { data, isFetching, error } = useGetPodcastQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // Check if data is undefined or null
  if (!data) {
    return <Error />;
  }

  const episodes = data?.data?.podcastUnionV2?.episodesV2?.items || [];

  if (isFetching) {
    return <Loader title="Loading Top Podcasts" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Podcasts</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {episodes.map((episode, i) => (
          <SongCard
            key={episode.uid}
            song={episode.entity.data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={episodes}
            i={i}
            image={episode.entity.data.coverArt.sources[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
