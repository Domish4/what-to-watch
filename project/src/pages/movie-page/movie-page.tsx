import { useParams } from 'react-router-dom';
import TabsNavigation from '../../components/tabs/tabs-navigation';
import MovieTabs from '../../components/tabs/movie-tabs';
import ErrorPage from '../error-page/error-page';
import { MAX_RELATED_FILMS, tabNames } from '../../const';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import {useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchFilmAction, fetchSimularFilms} from '../../store/api-actions';
import { useEffect } from 'react';
import { store } from '../../store';
import Header from '../../components/header/header';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

type MoviePageProps = {
  activeTab: typeof tabNames[number];
}

function MoviePage({activeTab}: MoviePageProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const reviewsList = useAppSelector((state) => state.reviews);
  const simularFilms = useAppSelector((state) => state.simularFilms);
  const params = useParams();

  useEffect(() => {

    if (params.id) {
      store.dispatch(fetchFilmAction({id: params.id}));
      store.dispatch(fetchCommentsAction({id: params.id}));
      store.dispatch(fetchSimularFilms({id: params.id}));
    }
  }, [params.id]);

  const film = films.find((movie) => `${movie.id}` === params.id);
  if (!film || !params.id) {
    return <ErrorPage />;
  }

  const relatedFilms = simularFilms.filter((item) => item.genre === film.genre);

  const {backgroundImage, name, genre, released, isFavorite, posterImage} = film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <FilmCardButtons promoFilm={film} isFavorite={isFavorite} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <TabsNavigation id={params.id} activeTab={activeTab} />
              <MovieTabs activeTab={activeTab} film={film} reviewsList={reviewsList}/>

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList filteredFilms={relatedFilms} quantity={MAX_RELATED_FILMS} />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
