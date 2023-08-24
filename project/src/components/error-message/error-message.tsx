import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  return (error)
    ?
    <>
      <div className='error-message'>{error}</div>
      <Link to='/'> <button>Вернуться на главную</button>
      </Link>
    </>
    : null;

}

export default ErrorMessage;
