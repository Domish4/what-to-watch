import {createAction} from '@reduxjs/toolkit';
import { FilmType } from '../types/films';
import { AuthorizationStatus } from '../const';
import { ReviewType } from '../types/review';

export const Action = {
  CHANGEGENRES: 'CHANGE_GENRES',
  GETFILMSBYGENRE: 'GET_FILMS_BY_GENRE',
  LOADFILMS: 'GET_ALL_FILMS',
  REQUIREAUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SETERROR: 'SET_ERROR',
  LOADREVIEWS: 'LOAD_REVIEWS',
  SETLOAD: 'SET_LOAD'
};

export const changeGenres = createAction<string>(Action.CHANGEGENRES);

export const getFilmsByGenres = createAction<FilmType[]>(Action.GETFILMSBYGENRE);

export const loadFilms = createAction<FilmType[]>(Action.LOADFILMS);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIREAUTHORIZATION);

export const setError = createAction<string | null>(Action.SETERROR);

export const loadReviews = createAction<ReviewType[]>(Action.LOADREVIEWS);

export const setDataLoadingStatus = createAction<boolean>(Action.SETLOAD);
