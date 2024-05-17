import { Suspense } from 'react';
import Products from '../components//Products/Products';
import Loading from '../components/Loading/Loading';

const Ironman = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Products category="iron" />
    </Suspense>
  );
};

export default Ironman;
