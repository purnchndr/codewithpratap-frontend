import { useState } from 'react';
import style from './Loader.module.css';
import SplashScreen from '../splashScreen/SplashScreen';
function Loader({ text }) {
  return (
    <div className={style.LoaderBg}>
      <div className={style.LoaderImg}>
        <SplashScreen />
        {/* <img src='./img/loader.gif' width='200px' alt='loader' />
        {text && <p>{text}</p>} */}
      </div>
    </div>
  );
}

export default Loader;
