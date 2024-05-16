import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import ProductCardList from './ProductCardList';
import styles from './Products.module.css';
import useProducts from '../hooks/useProducts';
import { compare } from '../../utils/utils';
import Loading from '../Loading/Loading';

// 4가지 경우
// iron / spider / captain / filter_iron , filter_spider , filter_captain
const Products = ({ category }) => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const filterProduct =
    products &&
    products.filter((product) => `filter_${product.category}` === category);

  if (
    (category === 'filter_iron') |
    (category === 'filter_spider') |
    (category === 'filter_captain')
  ) {
    return (
      <section>
        {isLoading && <Loading />}
        {error && <p>{error.message}</p>}
        {products && <ProductCardList products={filterProduct} />}
      </section>
    );
  }

  if (
    (category === 'iron') |
    (category === 'spider') |
    (category === 'captain')
  ) {
    return (
      <section>
        {isLoading && <Loading />}
        {error && <p>{error.message}</p>}
        <ul className={styles.productsBox}>
          {products &&
            products
              .filter((product) => product.category === category)
              .sort(compare('title'))
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error.message}</p>}
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
};

export default Products;

Products.propTypes = {
  category: PropTypes.string,
};
