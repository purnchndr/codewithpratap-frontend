import style from './Blogs.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function Blogs() {
  return (
    <div>
      <Header />
      <div className={style.blogsBox}>
        <div className={style.blogs}>
          <h1>We are working on blogs</h1>
          <p>We will post some blogs soon.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
