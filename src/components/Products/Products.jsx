import ProductCard from './ProductCard';
import PropTypes from 'prop-types';
import ProductCardList from './ProductCardList';
import styles from './Products.module.css';
import useProducts from '../hooks/useProducts';
import { compare } from '../../utils/utils';

const Products = ({ category }) => {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  const filterIron =
    products && products.filter((product) => product.category === 'iron');
  const filterSpider =
    products && products.filter((product) => product.category === 'spider');
  const filterCaptain =
    products && products.filter((product) => product.category === 'captain');

  if (category === 'filter_iron') {
    return (
      <>
        {isLoading && <p>Loading 중 입니다...</p>}
        {error && <p>{error.message}</p>}
        <section>
          {products && <ProductCardList products={filterIron} />}
        </section>
      </>
    );
  }

  if (category === 'iron') {
    return (
      <>
        {console.log(products.filter((product) => product.category === 'iron'))}
        {isLoading && <p>Loading 중 입니다...</p>}
        {error && <p>{error.message}</p>}
        <section>
          <ul className={styles.productsBox}>
            {products &&
              products
                .filter((product) => product.category === 'iron')
                .sort(compare('title'))
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </ul>
        </section>
      </>
    );
  }

  if (category === 'filter_spider') {
    return (
      <>
        {isLoading && <p>Loading 중 입니다...</p>}
        {error && <p>{error.message}</p>}
        <section>
          {products && <ProductCardList products={filterSpider} />}
        </section>
      </>
    );
  }

  if (category === 'spider') {
    return (
      <>
        {console.log(
          products.filter((product) => product.category === 'spider')
        )}
        {isLoading && <p>Loading 중 입니다...</p>}
        {error && <p>{error.message}</p>}
        <section>
          <ul className={styles.productsBox}>
            {products &&
              products
                .filter((product) => product.category === 'spider')
                .sort(compare('title'))
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </ul>
        </section>
      </>
    );
  }

  if (category === 'filter_captain') {
    return (
      <>
        {isLoading && <p>Loading 중 입니다...</p>}
        {error && <p>{error.message}</p>}
        <section>
          {products && <ProductCardList products={filterCaptain} />}
        </section>
      </>
    );
  }

  if (category === 'captain') {
    return (
      <>
        {isLoading && <p>Loading 중 입니다...</p>}
        {error && <p>{error.message}</p>}
        <section>
          <ul className={styles.productsBox}>
            {products &&
              products
                .filter((product) => product.category === 'captain')
                .sort(compare('title'))
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </ul>
        </section>
      </>
    );
  }

  return (
    <>
      {isLoading && <p>Loading 중 입니다...</p>}
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
