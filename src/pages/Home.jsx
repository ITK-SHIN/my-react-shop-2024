import React from 'react';
import Products from '../components/Products';

const Home = () => {
  return (
    <section className="section">
      <Products category="filter_iron" />
      <Products category="filter_spider" />
      <Products category="filter_captain" />
    </section>
  );
};

export default Home;
