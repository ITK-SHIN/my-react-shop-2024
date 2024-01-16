import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import { SlHandbag } from 'react-icons/sl';
import { BsPencilSquare } from 'react-icons/bs';
import { FaShopware } from 'react-icons/fa';

import styles from './Navbar.module.css';
import { login, logout, onUserStateChange } from '../api/firebase';

const Navbar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
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
              <FaShopware className={styles.home__icon} /> React Shop
            </Link>
          </h1>
          <nav className={styles.header__item}>
            <Link to="/fashion" className={`${styles.fashion}`}>
              패션
            </Link>
            <Link to="/accessory" className={styles.accessory}>
              액세서리
            </Link>
            <Link to="/digital" className={styles.digital}>
              디지털
            </Link>
          </nav>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.searchBox}>
            <label className={styles.toggle_box}>
              <input type="checkbox" className={styles.toggle_btn} />
              <IoMoon className={styles.toggle__moon} />
              <MdOutlineWbSunny className={styles.toggle__sun} />
            </label>
            <div className={styles.searchBox__input}>
              <input
                type="text"
                placeholder="검색"
                className={styles.header__inputText}
              />
            </div>
          </div>
          <Link to="/products/new">
            <BsPencilSquare className={styles.rightItem__pencil} />
          </Link>
          {!user && (
            <button onClick={handleLogin} className={styles.logInBtn}>
              <span>Login</span>
            </button>
          )}
          {user && (
            <button onClick={handleLogout} className={styles.logoutBtn}>
              <span>Logout</span>
            </button>
          )}
          <Link to="/carts">
            <SlHandbag className={styles.cart} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
