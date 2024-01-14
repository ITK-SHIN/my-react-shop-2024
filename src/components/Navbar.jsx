import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMoon } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';
import { SlHandbag } from 'react-icons/sl';

import { BsFillPencilFill } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.leftBox}>
          <label htmlFor="side-menu" className={styles.sideMenu}>
            <GiHamburgerMenu className={styles.sideMenu__icon} />
          </label>
          <h1 className={styles.title}>
            <Link to="/" className={styles.home}>
              React Shop
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
            <BsFillPencilFill className={styles.rightItem__pencil} />
          </Link>
          <button className={styles.logInBtn}>
            <span>Login</span>
          </button>
          <Link to="/carts">
            <SlHandbag className={styles.cart} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
