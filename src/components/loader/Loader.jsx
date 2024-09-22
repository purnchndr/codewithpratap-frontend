import { useState } from 'react';
import style from './Loader.module.css';
function Loader({ text }) {
  console.log(text);
  return (
    <div className={style.LoaderBg}>
      <div className={style.LoaderImg}>
        <img src='./img/loader.gif' width='200px' alt='loader' />
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

export default Loader;
