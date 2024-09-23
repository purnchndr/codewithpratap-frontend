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
    const validateEmail = email => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    try {
      e.preventDefault();
      if (!mobile) {
        setError('Phone/Email is required');
        return toast.error('Phone/Email is required');
      }
      const num = Number(mobile);
      if (num && mobile.length !== 10)
        return toast.error('Invalid Phone, Enter without country code');
      if (!num && !validateEmail(mobile)) return toast.error('Invalid Email');
      if (!password) {
        setError('Password is required');
        return toast.error('Password is required');
      }

      setLoading('Logging you in');

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${window.BACKEND_URL}/api/user/login/`,
        headers: {},
        data: { mobile, password },
      };
      const res = await axios.request(config);
      console.log(res);
      toast.success('Login Complete');
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      const redirect = params.get('redirect') || 'dashboard';
      navigate('/' + redirect);
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
            label='Enter Phone or Email'
            placeholder='Enter Phone or Email'
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
      {loading && <Loader text={loading} />}
      <Footer />
    </>
  );
}

export default Login;
