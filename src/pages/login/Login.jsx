import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import style from './Login.module.css';
import Input from '../../components/input/Input';
import Loader from '../../components/loader/Loader';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();

  const handelPassword = e => setPassword(e.target.value);
  const handelmobile = e => setMobile(e.target.value);

  async function login(e) {
    try {
      e.preventDefault();
      if (!mobile) {
        setError('mobile is required');
        return toast.error('mobile is required');
      }
      if (!password) {
        setError('Password is required');
        return toast.error('Password is required');
      }

      setLoading(true);

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://codewithpratap-backend-production.up.railway.app/api/user/login/',
        headers: {},
        data: { mobile, password },
      };
      console.log(config);
      const res = await axios.request(config);
      console.log(res);
      toast.success('Login Complete');
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      const redirect = `/${params.get('redirect')}` || '/dashboard';
      navigate(redirect);
    } catch (err) {
      const msg = err.response?.data?.message || err.message;
      toast.error(msg);
      setError(msg);
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/user');
  }, []);

  return (
    <>
      <Header />
      <div className={style.loginBox}>
        <form className={style.login} onSubmit={login}>
          <Input
            type='text'
            label='mobile'
            placeholder='Enter mobile'
            value={mobile}
            name='mobile'
            handeler={handelmobile}
          />
          <Input
            type='password'
            label='Password'
            placeholder='Enter Password'
            value={password}
            name='password'
            handeler={handelPassword}
          />
          {error && <p className={style.error}>{error}</p>}
          <button className={style.loginBtn} type='submit'>
            Login
          </button>
        </form>
      </div>
      {loading && <Loader />}
      <Footer />
    </>
  );
}

export default Login;
