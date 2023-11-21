import React from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../components/mainPage';
import Services from '../components/services';
import Footer from '../components/footer';
const HomePage = () => {
  const products = [
    { id: 1, name: 'Товар 1' },
    { id: 2, name: 'Товар 2' },
  ];

  return (
    <div>
        <MainPage/>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
        <Services/>
        <Footer/>
    </div>
  );
};

export default HomePage;
