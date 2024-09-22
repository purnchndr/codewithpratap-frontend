import { Link, useParams } from 'react-router-dom';
import style from './CourseDetails.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const course = {
  img: '/img/mern.png',
  name: 'Full Stack Developer (MERN Stack) 2024',
  price: '9999',
  price2: '4999',
  duration: '62',
  language: 'Hindi/English',
  url: 'courses/mern2024',
  newCourse: true,
};

function CourseDetails() {
  const params = useParams();
  return (
    <>
      <Header />
      <div className={style.courseDetailsBox}>
        <div className={style.courseDetails}>
          <h1> Full Stack Developer (MERN Stack) 2024</h1>
          <p>
            Duration: {course.duration} || Language: {course.language}
          </p>
          <h2>About The Course</h2>
          <p>
            Build fullstack React.js applications with Node.js, Express.js &
            MongoDB (MERN) with this project-focused course.
          </p>
          <h2>This Course Includes</h2>
          <p>
            Explore the comprehensive learning experience awaiting you on this
            course detail page. From fundamental concepts to advanced
            techniques, discover what you will learn and how it will propel your
            skills to new heights.
          </p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>CSS Animations</li>
            <li>End to End React.js Application</li>
            <li>End to End React.js Application</li>
            <li>No Pre requisite required</li>
            <li>Building all Project from absolute Scratch</li>
            <li>Tailwind CSS</li>
            <li>Core JavaScript</li>
            <li>15+ Industry Grade Projects</li>
            <li>End to End Backend with Node.js and Express.js</li>
          </ul>
        </div>
        <div className={style.coursePoster}>
          <CourseCard data={course} />
        </div>
      </div>
      <Footer />
    </>
  );
}

function CourseCard({ data }) {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const { img, name, price, price2, duration } = data;
  return (
    <div className={style.courseCard}>
      <img className={style.courseLogo} src={img} alt={name} />
      <p className={style.courseName}>{name}</p>
      <p>
        Price: <span className={style.pricecut}> &#8377;{price} </span> &#8377;
        {price2}/- only
      </p>
      <div>
        <span>Duration: {duration} Hours</span>
        <p>This Course Includes :</p>
        <ul>
          <li>No Prerequisite Required</li>
          <li>150 Hours On Demand Video</li>
          <li>MERN Stack Beginner to Advanced</li>
          <li>Industry Grade Projects</li>
        </ul>
      </div>
      {token ? (
        <div>
          <a
            href={`https://pages.razorpay.com/codewithpratap-mern2024?email=${user.email}&phone=${user.mobile}`}
            target='_blank'
          >
            <button className={style.buyBtn}>Buy Now</button>
          </a>

          <span className={style.small}>
            *now will redirect to secure payment page to complete payment.
          </span>
          <span className={style.small}>
            **It may take upto 24 hours to get access to purchased course.
          </span>
        </div>
      ) : (
        <div>
          <Link to='/login?redirect=courses/mern24'>
            <button className={style.buyBtn}>Login To Buy</button>
          </Link>
          <span className={style.small}>
            *you need to login first to buy this course.
          </span>
        </div>
      )}
    </div>
  );
}

// function PaymentBtnRazorPay() {
//   return (
//     // <form>
//     //   <script
//     //     src='https://checkout.razorpay.com/v1/payment-button.js'
//     //     data-payment_button_id='pl_P0HZPTINsBjCCd'
//     //     async
//     //   ></script>
//     // </form>
//   );
// }

export default CourseDetails;
