import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <div className={styles.NotFound}>
        <h1 className={styles.top}>404</h1>
        <p className={styles.middle}>페이지를 찾을 수 없습니다.</p>
        <button className={styles.button}>
          <Link to="/" className={styles.link}>
            메인으로
          </Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
