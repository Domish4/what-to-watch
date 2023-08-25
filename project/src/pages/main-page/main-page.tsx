import { useState } from 'react';
import FilmsList from '../../components/films-list/films-list';
import GenresList from '../../components/genres-list/genres-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { MAX_FILMS_COUNT } from '../../const';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ErrorPage from '../error-page/error-page';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';


function MainPage(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.genres);
  const filteredFilms = films.filter((item) => item.genre === currentGenre);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(MAX_FILMS_COUNT);
  const promoFilm = useAppSelector((state) => state.promoFilm);

  if (promoFilm === null) {
    return <ErrorPage/>;
  }
  const {backgroundImage, isFavorite, name, posterImage, genre, released} = promoFilm;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <FilmCardButtons promoFilm={promoFilm} isFavorite={isFavorite}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <FilmsList filteredFilms={filteredFilms} quantity={visibleMoviesCount} />
          {visibleMoviesCount < filteredFilms.length && <ShowMoreButton setVisibleMoviesCount={setVisibleMoviesCount} /> }
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MainPage;
