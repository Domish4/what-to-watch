import { FilmType } from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmsListProps = {
    films: FilmType[];
}
function FilmsList({films}: FilmsListProps): JSX.Element {

  const [, setActiveCard] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (<FilmCard onMouseEnter={() => setActiveCard(film.id)} onMouseLeave={()=> setActiveCard(0)} key={film.id} film={film} />))}
    </div>
  );
}

export default FilmsList;
