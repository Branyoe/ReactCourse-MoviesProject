import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
  'X-RapidAPI-Key': '7d96279c05msh91569353630c966p1f6907jsn2b9be75eab51',
  'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://online-movie-database.p.rapidapi.com'}),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: (title) => ({
        url: `/title/find?q=${title}`,
        method: 'GET',
        headers: headers
      })
    })
  })
})

export const { useFetchMoviesQuery } = moviesApi;