import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { FilmType } from '../../types/films';
import ErrorPage from '../error-page/error-page';

type AddReviewProps = {
  films: FilmType[];
}
function AddReviewPage({films}: AddReviewProps): JSX.Element {
  const film = useAppSelector((state) => state.film);

  if (!film) {
    return <ErrorPage />;
  }

  const {posterImage, name} = film;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={posterImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddReviewForm/>
      </div>
    </section>
  );
}

export default AddReviewPage;
