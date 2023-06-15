import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';

const Setting = {
  genres: 'Horror',
  filmDates: '01.01.2021'
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      genres = {Setting.genres}
      filmDates={Setting.filmDates}
      films={films}
    />
  </React.StrictMode>,
);
