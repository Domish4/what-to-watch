import { Link } from 'react-router-dom';
import UserBlock from '../user-block/user-block';

function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to='/' className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <UserBlock />
    </header>
  );
}

export default Header;
