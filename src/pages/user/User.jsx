import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import style from './User.module.css';
import Loader from '../../components/loader/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function User() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading('Fetching User data');
        const token = localStorage.getItem('token');
        if (!token) return navigate('/login');

        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: `${window.BACKEND_URL}/api/user/`,
          headers: { token },
          data: {},
        };
        const res = await axios.request(config);
        setUser(res.data.user);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        toast.error(err.message);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const img = user?.img || '/img/user.png';
  const dob = new Date(user?.dob).toLocaleDateString() || 'not available';
  const courses =
    user?.courses?.length > 1
      ? user?.courses?.join(', ')
      : 'You Have not purchased any courses yet!';
  return (
    <>
      <Header />
      {loading && <Loader text={loading} />}
      {user && (
        <div className={style.userBox}>
          <div className={style.user}>
            <img src={img} alt='profile logo' />
            <h1> {user.name} </h1>
            <div className={style.courses}>
              <p>{courses}</p>
            </div>
            <div className={style.contact}>
              <p>Mobile Number: {user.mobile}</p>
              <p>Email: {user.email}</p>
            </div>

            <div className={style.contact}>
              <p>Date of Birth: {dob}</p>
              <p>Email: {user.email}</p>
            </div>
            <div className={style.address}>
              <p>Address: </p>
              <address className={style.address}>{user.address}</address>
            </div>
            <div className={style.logout}>
              <button onClick={logout}>LogOut</button>
            </div>
            <span>
              <i>
                *to update any details email us on{' '}
                <a href='mailto:codewithpratap@gmail.com'>
                  codewithpratap@gmail.com
                </a>
              </i>
            </span>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default User;
