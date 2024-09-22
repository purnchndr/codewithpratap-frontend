import style from './Dashboard.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div>
      <Header />
      <div className={style.dashboardBox}>
        <div className={style.dashboard}>
          <h1>You have not purchased any course yet</h1>
          <p>
            Purchase a course to start learning
            <Link to='/courses'> Click here</Link>
          </p>
          <p>
            If you have recently purchased a course, then it may take upto 24
            hours to aper here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
