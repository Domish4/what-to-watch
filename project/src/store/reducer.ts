import {createReducer} from '@reduxjs/toolkit';
import { requireAuthorization, changeGenres, loadFilms, setError, loadReviews, setDataLoadingStatus, getFilm, getPromoFilm, getSimularFilms, getFavoriteFilms, postComments} from './action';
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
  film: FilmType | null;
  promoFilm: FilmType | null;
  simularFilms: FilmType[];
  favoriteFilm: FilmType[];
  postComments: ReviewType | null;
}

const initialState: InitialState = {
  genres: 'All genres',
  filmsByGenres: [],
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  reviews: [],
  isDataLoading: false,
  film: null,
  promoFilm: null,
  simularFilms: [],
  favoriteFilm: [],
  postComments: null

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
  builder.addCase(getFilm, (state, action) => {
    state.film = action.payload;
  });
  builder.addCase(getPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
  });
  builder.addCase(getSimularFilms, (state, action) => {
    state.simularFilms = action.payload;
  });
  builder.addCase(getFavoriteFilms, (state, action) => {
    state.favoriteFilm = action.payload;
  });
  builder.addCase(postComments, (state, action) => {
    state.postComments = action.payload;
  });
});

export default reducer;
