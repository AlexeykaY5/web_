import React from 'react';


const Header = () => {
    return(
        <header className='header'>
            <img src="" alt="" />
            <div>
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
            <img src="" alt="" />
            <div>
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