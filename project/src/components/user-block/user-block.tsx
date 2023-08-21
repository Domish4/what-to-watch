import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserBlock(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  if ( authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link to='/' onClick={(evt) => {evt.preventDefault(); dispatch(logoutAction());}} className="user-block__link">Sign out</Link>
        </li>
      </ul>
    );
  } else {
    return (
      <div className="user-block">
        <Link to='/login' className="user-block__link">Sign in</Link>
      </div>
    );
  }
}


export default UserBlock;
