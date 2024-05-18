import Spinner from '../../assets/spin.gif';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <section className={styles.loading}>
      <img src={Spinner} alt="Loading Img" width="5%" />
    </section>
  );
};

export default Loading;
