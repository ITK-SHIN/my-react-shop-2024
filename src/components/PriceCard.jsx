/* eslint-disable react/prop-types */
import React from 'react';
import styles from './PriceCard.module.css';

const PriceCard = ({ text, price }) => {
  return (
    <div className={styles.priceCard_box}>
      <p className={styles.priceCard_text}>{text}</p>
      <p className={styles.priceCard_price}>₩{price}</p>
    </div>
  );
};

export default PriceCard;
