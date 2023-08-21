import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function MyListPage(): JSX.Element {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList filteredFilms={films} quantity={films.length} />
      </section>

      <Footer />
    </div>

  );
}

export default MyListPage;
