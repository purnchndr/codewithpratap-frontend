import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import style from './Homepage.module.css';

function Homepage() {
  return (
    <>
      <Header />
      <div className={style.homepage}>
        <MainSection />
        <SecondSection />
      </div>
      <Footer />
    </>
  );
}

function MainSection() {
  return (
    <div className={style.mainsection}>
      <div className={style.subsection}>
        <h1>Crack the Code to Success with Code with Pratap</h1>
        <p>
          Elevate your programming skills, solve challenges, and unlock the
          world of coding possibilities.
        </p>
        <div>
          <Link to='/courses'>
            <button>View Courses</button>
          </Link>
          <Link to='/tutorials'>
            <button>View Free Tutorials</button>
          </Link>
        </div>
      </div>
      <div className={style.subsection}>
        <div>
          <button>Free Web Dev</button>
          <button>Quick Compiler</button>
          <button>Tutorials</button>
          <button>Articles</button>
          <button>Dev Challenges</button>
          <button>Interview Experiences</button>
          <button>Theory and Notes</button>
          <button>Core CS Subjects</button>
        </div>
      </div>
    </div>
  );
}

function SecondSection() {
  return (
    <div className={style.secondsection}>
      <div className={style.subsection}>
        <span>Our most Advance Full Stack MERN Development Course</span>
        <h1>MERN Full Stack Web Developer 2024</h1>

        <ul>
          <p>
            Enroll in our most advance Web developer course and become a skilled
            developer. Learn cutting edge technologies:
          </p>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Node.js</li>
        </ul>

        <div>
          {/* <Link to='/callback-from'>
            <button>Get Callback</button>
          </Link> */}
          <Link to='/courses/mern2024'>
            <button>Enroll Now</button>
          </Link>
        </div>
      </div>
      <div className={style.subsection}>
        <Link to='/courses/mern2024' className={style.merncourse}>
          <p>Trending Courses</p>
          <img src='./img/mern.png' alt='mern logo' />
          <p>Full Stack Developer (MERN Stack)</p>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
