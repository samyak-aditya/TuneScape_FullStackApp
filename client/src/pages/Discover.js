import React from "react";
import { Error, Loader, SongCard } from "../components";
import { useGetAlbumsQuery } from "../redux/services/spotifyCore";

const Discover = () => {
  const { data, isFetching, error } = useGetAlbumsQuery();
  const genreTitle = 'Pop';

  console.log('its here');
  console.log('Fetched Data:', data);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select />
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.albums.map((album) => (
          <div key={album.id} className="album-card">
            <h3>{album.name}</h3>

            <div className="flex flex-wrap p-4 mb-4"> {/* Use a flex container for SongCard components */}
              {album.tracks.items.map((track, i) => (
                <SongCard
                  key={track.id}
                  song={track}
                  image={album.images[0]} // Use the first image for the song card
                  className="mr-4" // Add margin to create space between SongCard components
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
