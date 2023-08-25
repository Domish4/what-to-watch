import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import {AxiosInstance } from 'axios';
import { FilmType } from '../types/films';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { getFavoriteFilms, getFilm, getPromoFilm, getSimularFilms, loadFilms, loadReviews, postComments, redirectToRoute, requireAuthorization, setDataLoadingStatus, setError } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { ReviewType } from '../types/review';


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}> (
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, {id: string}, {
dispatch: AppDispatch;
state: State;
extra: AxiosInstance;
}> (
  'data/fetchComments',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
  }
);

export const fetchFilmAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchFilm',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(`${APIRoute.Films}/${id}`);
    dispatch(getFilm(data));
  }
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  '/promo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType>(APIRoute.Promo);
    dispatch(getPromoFilm(data));
  }
);

export const fetchSimularFilms = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/simularFilms',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(getSimularFilms(data));
  }
);

export const postComment = createAsyncThunk<ReviewType, {id: string; comment: string; rating: number}, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}> (
  'data/postComment',
  async ({id, rating, comment}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewType>(`${APIRoute.Comments}/${id}`, {comment, rating});
    dispatch(postComments(data));
    dispatch(redirectToRoute(`${APIRoute.Films}/${id}/reviews`));
    return data;

  }
);

export const fetchFavoriteFilms = createAsyncThunk<FilmType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}> (
  'data/fetchFavoriteMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmType[]>(APIRoute.Favorite);
    dispatch(getFavoriteFilms(data));
    return data;
  }
);
export const postFavoriteMoviesAction = createAsyncThunk<FilmType | void, {id: number; status: number}, {
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>(
  'data/postFavoriteMovies',
  async ({ id, status }, { dispatch, extra: api }) => {
    const {data} = await api.post<FilmType>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  },
);

