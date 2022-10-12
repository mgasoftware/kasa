import React from 'react';
import '../../styles/Main.css';
import background from '../../assets/homeBackground.png';
import logements from '../../datas/logements.json'
import Banner from '../Banner';

function Main() {
    return (
        <div className="kasa-main">
            <Banner background={background} />
            <main className="kasa-mainCard">
                {logements.map((logement) => (
                    <a key={logement.id} href="../public/index.html" className='kasa-mainCardBody'>
                        <img src={logement.cover} alt={logement.title} className="kasa-mainCardImg" />
                        <h2 className="kasa-mainCardTitle">{logement.title}</h2>
                    </a>
                ))}
            </main>
        </div>
    )
}

export default Main