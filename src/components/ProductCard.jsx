/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product: { id, image, title, category, price } }) => {
  return (
    <li className={styles.card}>
      <img className={styles.img} src={image} alt={title} />
      <h3 className={styles.card_title}>{title}</h3>

      <div className={styles.price_category}>
        <p className={styles.price}>{`₩${price}`}</p>
        <p className={styles.category}>{category}</p>
      </div>
    </li>
  );
};

export default ProductCard;
