import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.css';

const User = ({ user: { photoURL, displayName } }) => {
  console.log(photoURL);
  return (
    <div className={styles.userBox}>
      <img className={styles.userImg} src={photoURL} alt={displayName} />
      <span className={styles.displayName}>{displayName}</span>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  photoURL: PropTypes.string,
  displayName: PropTypes.string,
};

export default User;
