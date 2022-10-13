import React from 'react';

import '../../styles/Header.css'
import logo from '../../assets/logo.png'
import Navigation from '../Features/Navigation';

function Header() {
    return (
        <header className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-headerLogo' />
            <Navigation />
        </header>
    );
}

export default Header