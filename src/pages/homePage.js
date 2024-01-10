import React from 'react';
import Header from '../components/header';
import Main from '../components/main';
import Services from '../components/services';
import AboutUs from '../components/aboutUs';
import Contact from '../components/contact';
import Footer from '../components/footer';
// import Popup from '../components/popup';

const HomePage = () => {

  return (
    <div className='homePage'>
      <Header/>
      <Main/>
      <Services/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default HomePage;
