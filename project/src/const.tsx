
export const tabNames = ['Overview', 'Details', 'Reviews'] as const;

export const GENRES_LIST = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];

export const MAX_FILMS_COUNT = 8;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
    Films = '/films',
    Login = '/login',
    Logout = '/logout',
    Comments = '/comments',
    Favorite = '/favorite',
    Promo = '/promo'

}

export const TIMEOUT_SHOW_ERROR = 5000;
