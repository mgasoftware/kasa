import React from 'react';
import '../styles/Main.css';
import background from '../assets/homeBackground.png';

function Main() {
    return (
        <main className="kasa-main">
            <div className="kasa-mainInfo">
                <img src={background} alt="background" className="kasa-mainImg" />
                <h1 className="kasa-mainText">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="kasa-mainCard"></div>
        </main>
    )
}

export default Main