import React from 'react';
import '../../styles/Cards.css';
import background from '../../assets/homeBackground.png';
import Banner from './Banner';
import { Link } from 'react-router-dom';

function Cards(props) {
    return (
        <div className="kasa-main">
            <Banner background={background} />
            <main className="kasa-mainCard">
                <div className='kasa-mainCardCenter'>
                    {props.logements.map((logement, index) => (
                        <Link key={index} to={"/logement/" + logement.id} className='kasa-mainCardBody'>
                            <img src={logement.cover} alt={logement.title} className="kasa-mainCardImg" />
                            <h2 className="kasa-mainCardTitle">{logement.title}</h2>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Cards