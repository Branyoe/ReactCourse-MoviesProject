import { createAction } from "@reduxjs/toolkit";

export const startFetchMovieRatings = createAction("START_FETCH_MOVIE_RATINGS");
export const successFetchMovieRatings = createAction("SUCCESS_FETCH_MOVIE_RATINGS");
export const errorFetchMovieRatings = createAction("ERROR_FETCH_MOVIE_RATINGS");

const headers = {
  'X-RapidAPI-Key': '7d96279c05msh91569353630c966p1f6907jsn2b9be75eab51',
  'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
}
const BASE_URL = 'https://online-movie-database.p.rapidapi.com'

export const fetchMovieRatings = (movieId) => async (dispatch) => {
  try {
    dispatch(startFetchMovieRatings()); //avisa al reducer cierta acción como si de una bandera se tratara

    const response = await fetch(`${BASE_URL}/title/get-ratings?tconst=${movieId}`, { headers }); //hace la consulta
    const data = await response.json();
    
    dispatch(successFetchMovieRatings({ data })); // en caso de que todo salga bien dispara la bandera y obtiene la data
  } catch (error) {
    dispatch(errorFetchMovieRatings({ error }));  
  }
};