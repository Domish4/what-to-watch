import { useAppSelector } from '../../hooks';
import { FilmType } from '../../types/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
type FilmsProps = {
  filteredFilms: FilmType[];
  quantity: number;
}

function FilmsList({filteredFilms, quantity}: FilmsProps): JSX.Element {
  const currentGenre = useAppSelector((state) => state.genres);
  const films = useAppSelector((state) => state.films);
  const [, setActiveCard] = useState(0);


  if (currentGenre === 'All genres') {
    return (
      <div className="catalog__films-list">
        {films.slice(0, quantity).map((film) => (<FilmCard onMouseEnter={() => setActiveCard(film.id)} onMouseLeave={()=> setActiveCard(0)} key={film.id} film={film}/>))}
      </div>
    );
  } else {
    return (
      <div className="catalog__films-list">
        {filteredFilms.slice(0, quantity).map((film) => (<FilmCard onMouseEnter={() => setActiveCard(film.id)} onMouseLeave={()=> setActiveCard(0)} key={film.id} film={film}/>))}
      </div>
    );
  }
}

export default FilmsList;
