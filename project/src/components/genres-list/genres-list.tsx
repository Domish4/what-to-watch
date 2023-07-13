import GenresItem from '../genres-item/genres-item';

function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      <GenresItem />
    </ul>
  );
}

export default GenresList;
