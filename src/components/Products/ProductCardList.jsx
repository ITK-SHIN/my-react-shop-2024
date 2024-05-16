import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import styles from './ProductCardList.module.css';

const ProductCardList = ({ products }) => {
  const filterProducts = products.filter((_, i) => i < 4);

  const productsCategoryText = products[0].category.replace(/^[a-z]/, (char) =>
    char.toUpperCase()
  );

  return (
    <>
      <h2 className={styles.title}>{productsCategoryText}</h2>
      <ul className={styles.cardBox}>
        {filterProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
};

export default ProductCardList;

ProductCardList.propTypes = {
  products: PropTypes.array,
};
