import { Link, useRouteError } from 'react-router-dom';
import style from './Error.module.css';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={style.errorpage}>
      <div className={style.error}>
        <img src='/img/error.webp' alt='error' />
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
        <Link to='/'>Go To Homepage</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
