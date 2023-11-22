import React from 'react';
import Header from '../components/header';
import MainPage from '../components/mainPage';
import Services from '../components/services';
import Footer from '../components/footer';
const HomePage = () => {

  return (
    <div>
        <Header/>
        <MainPage/>
        <Services/>
        <Footer/>
    </div>
  );
};

export default HomePage;
