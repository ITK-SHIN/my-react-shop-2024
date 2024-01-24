import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

const Products = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <>
      {isLoading && <p>Loading 중 입니다...</p>}
      {error && <p>{error}</p>}
      <ul>
        {console.log(products)}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
};

export default Products;
