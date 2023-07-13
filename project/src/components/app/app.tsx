import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import PlayerPage from '../../pages/player-page/player-page';
import ErrorPage from '../../pages/error-page/error-page';
import PrivateRoute from '../private-routes/private-routes';
import { FilmType } from '../../types/films';
import { ReviewType } from '../../types/review';

type AppProps = {
  films: FilmType[];
  reviewsList: ReviewType[];
}
function App({films, reviewsList}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignInPage />} />
        <Route path='/mylist' element={
          <PrivateRoute>
            <MyListPage films={films} />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<Navigate to='overview' />} />;
        <Route path='/films/:id/overview' element={<MoviePage activeTab='Overview' reviewsList={reviewsList} films={films}/>} />
        <Route path='/films/:id/details' element={<MoviePage activeTab='Details' reviewsList={reviewsList} films={films}/>} />
        <Route path='/films/:id/reviews' element={<MoviePage activeTab='Reviews' reviewsList={reviewsList} films={films}/>} />


        <Route path='/films/:id/review' element={<AddReviewPage films={films} />} />
        <Route path='/player/:id' element={<PlayerPage films={films} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
