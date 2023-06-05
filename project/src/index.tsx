import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    />
  </React.StrictMode>,
);
