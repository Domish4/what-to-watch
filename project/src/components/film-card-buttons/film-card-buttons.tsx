import { Link } from 'react-router-dom';
import { FilmType } from '../../types/films';
import { APIRoute } from '../../const';
import MyListBtn from '../my-list-button/my-list-button';

type ButtonsProps = {
    promoFilm: FilmType;
    isFavorite: boolean;
}

function FilmCardButtons({promoFilm, isFavorite}: ButtonsProps): JSX.Element {

  return (
    <div className="film-card__buttons">
      <Link to={`${APIRoute.Films}/player/${promoFilm.id}`}>
        <button className="btn btn--play film-card__button" type="button">
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
      </Link>
      <MyListBtn id={promoFilm.id} isFavorite={isFavorite} />
    </div>
  );
}

export default FilmCardButtons;
