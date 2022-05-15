import { getMovies } from '../../api';

import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {},
    reducers: {
      receiveMovies: (state, action) => {
        const movies = action.payload;
  
        return movies.reduce((result, movie) => {
          result[movie.id] = movie;
          return result;
        }, {});
      },
    },
  });


export const { receiveMovies } = moviesSlice.actions;

export const listProducts = () => async (dispatch) => {
  const movies = await getMovies();

  dispatch(receiveMovies(movies));
};

export default productsSlice.reducer;