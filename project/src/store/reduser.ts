import {createReducer} from '@reduxjs/toolkit';
import { changeGenres, getAllFilms} from './action';
import { FilmType } from '../types/films';
import { films } from '../mocks/films';

type InitialState = {
  genres: string;
  filmsByGenres: FilmType[];
  films: FilmType[];
}

const initialState: InitialState = {
  genres: 'All genres',
  filmsByGenres: films,
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenres, (state, action) => {
    state.genres = action.payload;
  });
  builder.addCase(getAllFilms, (state, action) => {
    state.films = action.payload;
  });
});

export default reducer;
