import style from './Tutorials.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
function Tutorials() {
  return (
    <div>
      <Header />
      <div className={style.tutorialsBox}>
        <div className={style.tutorials}>
          <h1>We are working on Tutorials</h1>
          <p>We will post some Tutorials soon.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tutorials;
