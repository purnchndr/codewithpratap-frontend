import { Link, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Header.module.css';
import Logo from '../logo/Logo';

function Header() {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const name = user ? JSON.parse(user)?.name.split(' ')[0] : '';
  return (
    <>
      <ToastContainer />
      <div className={style.header}>
        <Logo />

        <div className={style.navlinks}>
          <NavLink to='/'> Home </NavLink>
          {token && <NavLink to='/dashboard'> Dashboard </NavLink>}
          <NavLink to='/courses'> Courses </NavLink>
          <NavLink to='/tutorials'> Tutorial </NavLink>
          <NavLink to='/blogs'> Blogs </NavLink>
          <NavLink to='/contact'> Contact </NavLink>
        </div>

        {!token ? (
          <div>
            <Link to='/login'>
              <button>Login</button>
            </Link>
            <Link to='/signup'>
              <button>SignUp</button>
            </Link>
          </div>
        ) : (
          <Link to='/user'>
            <div className={style.profile}>
              <img
                src='/img/user.png'
                width='30px'
                height='30px'
                alt='profile'
              />
              <p>{name}</p>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}

export default Header;
