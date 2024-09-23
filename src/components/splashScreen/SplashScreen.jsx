import style from './SplashScreen.module.css';
function SplashScreen() {
  return (
    <div className={style.splashScreen}>
      <div className={style.breathingButton}>
        <img src='/img/logo.png' alt='splash screen' />
      </div>
    </div>
  );
}

export default SplashScreen;
