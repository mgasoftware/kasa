import React from 'react';
import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
    return (
        <header className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-headerLogo' />
            <ul className='kasa-headerMenu'>
                <li><a href="../public/index.html" style={{textDecoration: 'underline'}}>Acceuil</a></li>
                <li><a href="../public/index.html">A Propos</a></li>
            </ul>
        </header>
    );
}

export default Header