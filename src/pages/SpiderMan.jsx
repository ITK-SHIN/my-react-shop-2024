import { Suspense } from 'react';
import Products from '../components//Products/Products';
import Loading from '../components/Loading/Loading';

const SpiderMan = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Products category="spider" />
    </Suspense>
  );
};

export default SpiderMan;
