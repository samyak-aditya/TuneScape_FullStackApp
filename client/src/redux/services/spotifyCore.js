import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'c65a67def3mshc766b01ca33f075p16e14djsnd26fab923ee7');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (ids) => {
        // Construct the correct URL using the provided IDs
        return {
          url: '/albums',
          params: {
            ids: '3IBcauSj5M2A6lTeffJzdv', // Use the passed-in IDs
          },
        };
      },
    }),
  }),
});

export const { useGetAlbumsQuery } = spotifyCoreApi;
