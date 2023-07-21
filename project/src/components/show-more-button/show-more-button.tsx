import { MAX_FILMS_COUNT } from '../../const';


type ShowMoreButtonProps = {
  setVisibleMoviesCount: React.Dispatch<React.SetStateAction<number>>;
}

function ShowMoreButton({setVisibleMoviesCount}: ShowMoreButtonProps): JSX.Element {

  return (
    <div className="catalog__more">
      <button onClick={() => setVisibleMoviesCount((prev) => prev + MAX_FILMS_COUNT)} className="catalog__button" type="button">Show more</button>
    </div>
  );
}

export default ShowMoreButton;
