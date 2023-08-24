import Footer from '../../components/footer/footer';
import { useState } from 'react';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import Logo from '../../components/logo/logo';

function SignInPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  function handleSubmit() {
    onSubmit({
      login: email,
      password: password
    });
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" name="user-email" id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="user-password" id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSubmit}>Sign in</button>
          </div>
        </form>
      </div>

      <Footer />

    </div>


  );
}

export default SignInPage;
