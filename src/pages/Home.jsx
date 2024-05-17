import Products from '../components/Products/Products';
import CarouselBox from '../components/Carousel/Carousel';
import { Suspense } from 'react';
import Loading from '../components/Loading/Loading';

const Home = () => {
  return (
    <>
      <CarouselBox />
      <main className="section">
        <Suspense fallback={<Loading />}>
          <Products category="filter_iron" />
          <Products category="filter_spider" />
          <Products category="filter_captain" />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
