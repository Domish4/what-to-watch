import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenres, } from '../../store/action';
function GenresItem(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genres);
  const films = useAppSelector((state) => state.films);
  const genres = films.filter((obj) => Object.keys(obj).includes('genre')).map((obj) => obj.genre);
  const uniqueGenres = [...new Set(genres)];


  return (
    <>

      <li className={`catalog__genres-item ${'All genres' === currentGenre ? 'catalog__genres-item--active' : ''}`}>
        <Link to='/' className="catalog__genres-link" onClick={() => {dispatch(changeGenres('All genres'));}}>
              All Genres
        </Link>
      </li>
      {
        uniqueGenres.map((genre) => (
          <li className={`catalog__genres-item ${genre === currentGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
            <Link to='/' className="catalog__genres-link" onClick={() => {dispatch(changeGenres(genre));}}>
              {genre}
            </Link>
          </li>
        ))
      }
    </>
  );
}

export default GenresItem;
