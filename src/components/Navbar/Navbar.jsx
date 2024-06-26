import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsPencilSquare } from 'react-icons/bs';
import { FaShopware } from 'react-icons/fa';

import styles from './Navbar.module.css';

import User from '../User';
import { useAuthContext } from '../../contexts/AuthContext';
import CartStatus from '../CartStatus';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  const { user, login, logout } = useAuthContext();

  const strangerClickCart = () => {
    alert('로그인 후 이용해 주세요');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.leftBox}>
          <label htmlFor="side-menu" className={styles.sideMenu}>
            <GiHamburgerMenu className={styles.sideMenu__icon} />
          </label>
          <h1 className={styles.title}>
            <Link to="/" className={styles.home}>
              <FaShopware className={styles.home__icon} /> Marvel Shop
            </Link>
          </h1>
          <nav className={styles.header__item}>
            <Link to="/ironman" className={`${styles.ironLink}`}>
              Iron
            </Link>
            <Link to="/spiderman" className={styles.spiderLink}>
              Spider
            </Link>
            <Link to="/captain" className={styles.captainLink}>
              Captain
            </Link>
          </nav>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.searchBox}>
            <DarkMode />
            <div className={styles.searchBox__input}>
              <input
                type="text"
                placeholder="검색"
                className={styles.header__inputText}
              />
            </div>
          </div>
          {user && user.isAdmin && (
            <Link to="/products/new">
              <BsPencilSquare className={styles.rightItem__pencil} />
            </Link>
          )}

          {user && <User user={user} />}
          {!user && (
            <button onClick={login} className={styles.logInBtn}>
              <span>Login</span>
            </button>
          )}
          {user && (
            <button onClick={logout} className={styles.logoutBtn}>
              <span>Logout</span>
            </button>
          )}
          <Link to="/carts" onClick={!user && strangerClickCart}>
            <CartStatus />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
