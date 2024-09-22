import style from './Contact.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Logo from '../../components/logo/Logo';
function Contact() {
  return (
    <div>
      <Header />
      <div className={style.contactBox}>
        <div className={style.contact}>
          <Logo />
          <p>Postal Address:</p>
          <address>
            62B, Bodarwar, Kushinagar
            <br />
            Uttar Pradesh, India, 274149
          </address>

          <h2>Contact and Support</h2>
          <p>
            Email:{' '}
            <a href='mailto:codewithpratap@gmail.com'>
              codewithpratap@gmail.com
            </a>
          </p>
          <p>
            Phone:
            <a href='tel:+919125847068'> +919125847068</a>
          </p>
          <div className={style.social}>
            <a href='https://www.instagram.com/codewithpratap' target='_blank'>
              <img width='30px' src='/img/instagram.png' alt='instagram' />
            </a>
            <a href='https://www.x.com/codewithpratap' target='_blank'>
              <img width='30px' src='/img/twitter.png' alt='twitter' />
            </a>
            <a
              href='https://www.linkedin.com/in/codewithpratap'
              target='_blank'
            >
              <img width='30px' src='/img/linkedin.png' alt='linkedin' />
            </a>
            <a href='https://www.pinterest.com/codewithpratap' target='_blank'>
              <img width='30px' src='/img/pinterest.png' alt='pinterest' />
            </a>
          </div>
          <p> &copy; 2024, All writes reserved</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
