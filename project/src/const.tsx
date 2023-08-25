
export const tabNames = ['Overview', 'Details', 'Reviews'] as const;

export const GENRES_LIST = [
  'All genres',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thriller'
];

export const MAX_FILMS_COUNT = 8;
export const MAX_RELATED_FILMS = 4;

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

export enum PlayerButtons {
  Pause = '#pause',
  Play = '#play-s',
  FullScreen = '#full-screen',
}

function formatTime(time: number): string {
  if (time > 3600) {
    const hours = Math.floor(time / 3600);
    const min = Math.floor(time % 3600 / 60);
    const sec = time % 60;
    return `${hours} : ${min} : ${sec}`;
  } else {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min} : ${sec}`;
  }
}

export default formatTime;

export const TIMEOUT_SHOW_ERROR = 5000;
