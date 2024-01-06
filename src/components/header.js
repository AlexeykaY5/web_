import '../styles/header.css';
import logo from '../img/logo.png'
import React from 'react';

const Header = () => {
    return(
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" style={{ width: "100px" }}/>
                <h1>MyBurenie</h1>
            </div>
            <div className='nav'>
                <a href="tel:+375(29)555-58-16">+375(29)555-58-16</a>
                <a href="#number3">Услуги</a>
                <a href="#number4">О нас</a>
                <a href="#number6">Контакты</a>
            </div>
        </header>
    );
};

export default Header;