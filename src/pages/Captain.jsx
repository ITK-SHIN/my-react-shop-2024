import { Suspense } from 'react';
import Products from '../components/Products/Products';
import Loading from '../components/Loading/Loading';

const Captain = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Products category="captain" />
    </Suspense>
  );
};

export default Captain;
