import React from 'react';
import '../../styles/Main.css';
import background from '../../assets/homeBackground.png';
import logements from '../../datas/logements.json'

function Main() {
    return (
        <main className="kasa-main">
            <div className="kasa-mainInfo">
                <img src={background} alt="background" className="kasa-mainImg" />
                <h1 className="kasa-mainText">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="kasa-mainCard">
                {logements.map((logement) => (
                    <a href="../public/index.html" className='kasa-mainCardBody'>
                        <img src={logement.cover} alt={logement.title} className="kasa-mainCardImg" />
                        <h2 className="kasa-mainCardTitle">{logement.title}</h2>
                    </a>
                ))}
            </div>
        </main>
    )
}

export default Main