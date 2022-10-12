import React from 'react';
import '../../styles/Main.css';
import background from '../../assets/homeBackground.png';
import logements from '../../datas/logements.json'
import Banner from '../Banner';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="kasa-main">
            <Banner background={background} />
            <main className="kasa-mainCard">
                {logements.map((logement) => (
                    <Link key={logement.id} to={"/logement/"+logement.id} className='kasa-mainCardBody'>
                        <img src={logement.cover} alt={logement.title} className="kasa-mainCardImg" />
                        <h2 className="kasa-mainCardTitle">{logement.title}</h2>
                    </Link>
                ))}
            </main>
        </div>
    )
}

export default Main