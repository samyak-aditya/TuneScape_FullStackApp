import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000', // Update the base URL to localhost:5000
  }),
  endpoints: (builder) => ({
    getDiscover: builder.query({
      query: () => {
        return {
          url: '/discover',
        };
      },
    }),
    getGenre: builder.query({
      query: () => {
        return {
          url: '/genre',
        };
      },
  }),
  getPodcast: builder.query({
    query: () => {
      return {
        url: '/podcast',
      };
    },
}),
getArtist: builder.query({
  query: () => {
    return {
      url: '/artists',
    };
  },
}),
getTracks: builder.query({
  query: () => {
    return {
      url: '/tracks',
    };
  },
}),
  
  }),
});

export const { useGetDiscoverQuery,useGetGenreQuery, useGetPodcastQuery, useGetArtistQuery, useGetTracksQuery } = spotifyCoreApi;
