import { Link } from 'react-router-dom';
import { GENRES_LIST } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenres, } from '../../store/action';
function GenresItem(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentGenre = useAppSelector((state) => state.genres);

  return (
    <>
      {
        GENRES_LIST.map((genre) => (
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
