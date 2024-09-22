import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import style from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={style.section1}>
        <Logo />
        <p> &copy; 2024, All writes reserved</p>
        <address>
          62B, Bodarwar, Kushinagar
          <br />
          Uttar Pradesh, India, 274149
        </address>
      </div>
      <div className={style.section1}>
        <h2>Contact and Support</h2>
        <p>
          <a href='mailto:codewithpratap@gmail.com'>codewithpratap@gmail.com</a>
        </p>
        <p>
          <a href='tel:+919125847068'>+919125847068</a>
        </p>
        <div className={style.social}>
          <a href='https://www.instagram.com/codewithpratap' target='_blank'>
            <img width='30px' src='/img/instagram.png' alt='instagram' />
          </a>
          <a href='https://www.x.com/codewithpratap' target='_blank'>
            <img width='30px' src='/img/twitter.png' alt='twitter' />
          </a>
          <a href='https://www.linkedin.com/in/codewithpratap' target='_blank'>
            <img width='30px' src='/img/linkedin.png' alt='linkedin' />
          </a>
          <a href='https://www.pinterest.com/codewithpratap' target='_blank'>
            <img width='30px' src='/img/pinterest.png' alt='pinterest' />
          </a>
        </div>
      </div>
      <div className={style.section1}>
        <h2>Legal</h2>
        <Link to='/terms-of-use'>Terms of use</Link>
        <Link to='/privacy-policy'>Privacy Policy</Link>
        <Link to='/copyright'>Copyright Policy</Link>
        <Link to='/refund-and-cancellation-policy'>
          Refund & Cancellation Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
