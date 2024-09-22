import { useNavigate } from 'react-router-dom';
import style from './Register.module.css';
import { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { toast } from 'react-toastify';
import Loader from '../../components/loader/Loader';
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);

  const handelName = e => setName(e.target.value);
  const handelmobile = e => setmobile(e.target.value);
  const handelemail = e => setemail(e.target.value);
  const handelPassword = e => setPassword(e.target.value);
  const handelPassword2 = e => setPassword2(e.target.value);
  const handelAddress = e => setAddress(e.target.value);
  const handelDob = e => setDob(e.target.value);

  async function register(e) {
    try {
      e.preventDefault();
      if (!name) return toast.error('Name is required');
      if (!mobile) return toast.error('mobile is required');
      if (!email) return toast.error('email is required');
      if (!password) return toast.error('Password is required');
      if (!password2) return toast.error('Please Repeat Password');
      if (password !== password2) return toast.error('Password did not match');
      if (!dob) return toast.error('Please enter Date of Birth');

      setLoading(true);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://codewithpratap-backend-production.up.railway.app/api/user/register/',
        headers: {},
        data: { name, mobile, email, address, dob, password },
      };
      const res = await axios.request(config);
      console.log(res);
      toast.success('Registration Complete');
      const token = res.data.token;
      const user = res.data.user;
      // const user = res.data.user.name?.split(' ')[0];
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || err.message;
      toast.error(msg);
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
      <div className={style.registerBox}>
        <form className={style.register} onSubmit={register}>
          <Input
            type='text'
            label='Name'
            placeholder='Yout Full Name'
            value={name}
            name='name'
            handeler={handelName}
          />
          <Input
            type='tel'
            label='mobile'
            placeholder='Enter mobile'
            value={mobile}
            name='mobile'
            handeler={handelmobile}
          />
          <Input
            type='email'
            label='email'
            placeholder='Enter Email'
            value={email}
            name='email'
            handeler={handelemail}
          />
          <Input
            type='password'
            label='Password'
            placeholder='Enter a Strong Password'
            value={password}
            name='password'
            handeler={handelPassword}
          />
          <Input
            type='password'
            label='Confirm Password'
            placeholder='Enter above Password again'
            value={password2}
            name='password2'
            handeler={handelPassword2}
          />
          <Input
            type='date'
            label='Date of Birth'
            placeholder='Enter Date of Birth'
            value={dob}
            name='dob'
            handeler={handelDob}
          />
          <label className={style.textareaBox}>
            Address:
            <textarea
              className={style.textarea}
              cols='40'
              rows='6'
              placeholder='Enter your complete address'
              value={address}
              onChange={handelAddress}
            />
          </label>
          <button className={style.registerBtn} type='submit'>
            Sign UP
          </button>
        </form>
      </div>
      <Footer />
      {loading && <Loader />}
    </>
  );
}

export default Register;
