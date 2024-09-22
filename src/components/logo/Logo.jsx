import { Link } from 'react-router-dom';
import style from './Logo.module.css';

function Logo() {
  return (
    <div className={style.logo}>
      <div className={style.logoIcon}></div>
      <Link to='/' className={style.logoLink}>
        <span className={style.code}>Code </span>
        <span className={style.with}>with </span>
        <span className={style.pratap}>Pratap</span>
      </Link>
    </div>
  );
}

export default Logo;
