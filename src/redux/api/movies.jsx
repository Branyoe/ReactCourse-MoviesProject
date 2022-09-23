//***Imports
import { createApi } from '@reduxjs/toolkit/query/react'; //create a apiCall setting 
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'; //it is similar to fetch

const headers = {
  'X-RapidAPI-Key': '7d96279c05msh91569353630c966p1f6907jsn2b9be75eab51',
  'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
}

/**
 * moviesApi is apiCall for search movies
 */
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://online-movie-database.p.rapidapi.com'}),
  endpoints: (builder) => ({
    //this is a endpoint definition
    fetchMovies: builder.query({
      query: (title) => ({
        url: `/title/find?q=${title}`,
        method: 'GET',
        headers: headers
      })
    })
  })
})

/**
 * apiCallMoviesHook
 * @module api/movies
 * @see views/Results
 */
export const { useFetchMoviesQuery } = moviesApi;