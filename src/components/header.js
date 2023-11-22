import React from 'react';

const Header = () => {
    return(
        <header className='header'>
            <div className='header_inst'/>
            <div className='header_block'>
                <li>
                    Main
                </li>
                <li>
                    Categories
                </li>
                <li>
                    Cosmetics
                </li>
            </div>
            <img className='header_logo' src="../img/logo.svg" alt="" />
            <div className='header_block'>
                <li>
                    Main
                </li>
                <li>
                    Categories
                </li>
                <li>
                    Contakts
                </li>
            </div>
            <div className='header_burger'>
                <div className='burger_stick'></div>
                <div className='burger_stick'></div>
                <div className='burger_stick'></div>
            </div>
        </header>
    );
};

export default Header;