/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductCard = ({ product: { id, image, title, category, price } }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p>{category}</p>
    </li>
  );
};

export default ProductCard;
