import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000', // Update the base URL to localhost:5000
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: () => {
        return {
          url: '/albums',
        };
      },
    }),
  }),
});

export const { useGetAlbumsQuery } = spotifyCoreApi;
