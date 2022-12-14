import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../redux/api/movies';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //automatically generated reducer by rtk query
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
