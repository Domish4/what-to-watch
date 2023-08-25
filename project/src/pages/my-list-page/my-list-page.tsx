import { useEffect } from 'react';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilms } from '../../store/api-actions';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchFavoriteFilms());
    }

    return () => { isMounted = false; };
  }, [dispatch]);

  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList filteredFilms={favoriteFilms} quantity={favoriteFilms.length} />
      </section>

      <Footer />
    </div>

  );
}

export default MyListPage;
