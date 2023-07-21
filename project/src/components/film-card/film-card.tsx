import { NavLink } from 'react-router-dom';
import { FilmType } from '../../types/films';
import {useState} from 'react';
import VideoPlayer from '../video-player/video-player';

type FilmCardProps = {
  film: FilmType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function FilmCard({film, onMouseEnter, onMouseLeave}: FilmCardProps): JSX.Element {

  const [isActive, setIsActive] = useState(false);

  const mouseOverHandler = () => {
    onMouseEnter();
    setIsActive(true);
  };

  const mouseOutHandler = () => {
    onMouseLeave();
    setIsActive(false);
  };

  const {name, id, posterImage} = film;
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={mouseOverHandler} onMouseLeave={mouseOutHandler} >
      <NavLink to={`/films/${id}`} style={{ color: 'inherit' }} >
        { isActive ? <VideoPlayer film={film}/> :
          <div className="small-film-card__image">
            <img src={posterImage} alt={name} width="280" height="175" />
          </div>}
        <h3 className="small-film-card__title">
          <p className="small-film-card__link">{name}</p>
        </h3>
      </NavLink>
    </article>
  );
}

export default FilmCard;
