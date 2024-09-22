import { Link } from 'react-router-dom';
import style from './Courses.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const courses = [
  {
    img: '/img/mern.png',
    name: 'Full Stack Developer (MERN Stack) 2024',
    price: '9999',
    price2: '4999',
    duration: '62',
    url: 'courses/mern2024',
    newCourse: true,
  },
];

function Courses() {
  return (
    <>
      <Header />
      <div className={style.coursesBox}>
        <h1> Explore all courses</h1>
        <div className={style.courses}>
          <CourseCard data={courses[0]} />
        </div>
        <p>More courses coming soon.</p>
      </div>
      <Footer />
    </>
  );
}

function CourseCard({ data }) {
  const { img, name, price, price2, duration, url, newCourse } = data;
  return (
    <div className={style.courseCard}>
      <Link to={`/${url}`}>
        <span>{newCourse && 'Recently updated'}</span>
        <img className={style.courseLogo} src={img} alt={name} />
        <p className={style.courseName}>{name}</p>
        <p>
          Price: <span className={style.pricecut}> &#8377;{price} </span>{' '}
          &#8377;
          {price2}/- only
        </p>
        <div>
          <span>
            {/* <img src='/img/clock.png' width='20px' alt='timer' />  */}
            Duration: {duration} Hours
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Courses;
