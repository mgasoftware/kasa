import React from 'react'

import Header from '../Features/Header';
import Footer from '../Features/Footer';
import Lightbox from '../Features/Lightbox';
import "../../styles/Logement.css"
import logements from '../../datas/logements.json'
import { Navigate, useParams } from 'react-router';
import Profile from '../Features/Profile';
import Tags from '../Features/Tags';
import Rating from '../Features/Rating';
import Dropdown from '../Features/Dropdown';

function Logement() {
  const id = useParams();
  const logementSelected = logements.find(logement => logement.id === id.id);

  if (logementSelected === undefined) {
    return <Navigate to="/error" />
  }

  return (
    <div className="kasa-logement">
      <Header />
      <Lightbox images={logementSelected.pictures} title={logementSelected.title} />
      <div className="kasa-logementMain">
        <div className="kasa-logementInfo">
          <div className="kasa-logementText">
            <h1 className="kasa-logementTitle">{logementSelected.title}</h1>
            <p className="kasa-logementLocation">{logementSelected.location}</p>
          </div>
          <Tags tags={logementSelected.tags} />
        </div>
        <div className="kasa-logementHostRating">
          <Profile host={logementSelected.host} />
          <Rating rate={logementSelected.rating} />
        </div>
      </div>
      <div className="kasa-logementDescEquip">
        <Dropdown title="Description" description={logementSelected.description} />
        <Dropdown title="Equipements" description={logementSelected.equipments}/>
      </div>
      <Footer />
    </div>
  )
}

export default Logement