import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus, APIRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteFilms, postFavoriteMoviesAction } from '../../store/api-actions';

type MyListButtonProps = {
  isFavorite: boolean;
  id: number;
}


function MyListBtn({isFavorite, id}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [refreshPage, setRefreshPage] = useState(false);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [dispatch, authorizationStatus, refreshPage]);


  const clickHandler = () => {
    setRefreshPage(!refreshPage);
    authorizationStatus === AuthorizationStatus.Auth ?
      dispatch(postFavoriteMoviesAction({
        id: id,
        status: isFavorite ? 0 : 1
      }))
      :
      navigate(APIRoute.Login);
  };

  return (
    <button onClick={clickHandler} className="btn btn--list film-card__button" type="button">
      {authorizationStatus === AuthorizationStatus.Auth && isFavorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
      )
        : (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
      <span style={{ marginLeft: authorizationStatus !== AuthorizationStatus.Auth ? '10px' : '' }}>My list</span>
      <span className={`film-card__count ${authorizationStatus !== AuthorizationStatus.Auth ? 'visually-hidden' : ''}`} data-testid='fav-films-counter'>{favoriteFilms.length}</span>
    </button>
  );
}

export default MyListBtn;
