import React from "react";
import '../styles/Footer.css';
import logo from '../assets/logoFooter.png';

function Footer() {
    return (
        <footer className="kasa-footer">
            <img src={logo} alt="kasa" className='kasa-footerLogo' />
            <p className='kasa-footerText'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer