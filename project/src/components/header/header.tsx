import UserBlock from '../user-block/user-block';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserBlock />
    </header>
  );
}

export default Header;
