import {createReducer} from '@reduxjs/toolkit';
import { requireAuthorization, changeGenres, loadFilms, setError, loadReviews, setDataLoadingStatus} from './action';
import { FilmType } from '../types/films';
import { AuthorizationStatus } from '../const';
import { ReviewType } from '../types/review';

type InitialState = {
  genres: string;
  filmsByGenres: FilmType[];
  films: FilmType[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  reviews: ReviewType[];
  isDataLoading: boolean;
}

const initialState: InitialState = {
  genres: 'All genres',
  filmsByGenres: [],
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  reviews: [],
  isDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenres, (state, action) => {
    state.genres = action.payload;
  });
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(setDataLoadingStatus, (state, action) => {
    state.isDataLoading = action.payload;
  });
});

export default reducer;
