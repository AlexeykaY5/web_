import './styles/reset.css';
import './styles/index.css';
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Services from './components/services';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';
import Footer from './components/footer';



function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Main/>
      <Services/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
