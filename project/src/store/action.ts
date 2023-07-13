import {createAction} from '@reduxjs/toolkit';
import { FilmType } from '../types/films';
export const Action = {
  CHANGEGENRES: 'CHANGE_GENRES',
  GETFILMSBYGENRE: 'GET_FILMS_BY_GENRE',
  GETALLFILMS: 'GET_ALL_FILMS'
};

export const changeGenres = createAction<string>(Action.CHANGEGENRES);

export const getFilmsByGenres = createAction<FilmType[]>(Action.GETFILMSBYGENRE);

export const getAllFilms = createAction<FilmType[]>(Action.GETALLFILMS);
