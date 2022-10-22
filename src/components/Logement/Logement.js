import React from 'react'

import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Lightbox from '../Features/Lightbox';
import "../../styles/Logement.css"
import logements from '../../datas/logements.json'
import { Navigate, useParams } from 'react-router';
import Profile from '../Features/Profile';
import Tags from '../Features/Tags';
import Rating from '../Features/Rating';

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
      <div className="kasa-logementInfo">
        <div className="kasa-logementText">
          <h1 className="kasa-logementTitle">{logementSelected.title}</h1>
          <p className="kasa-logementLocation">{logementSelected.location}</p>
        </div>
        <Profile host={logementSelected.host} />
      </div>
      <div className="kasa-logementDescription">
        <Tags tags={logementSelected.tags} />
        <Rating rate={logementSelected.rating} />
      </div>
      <Footer />
    </div>
  )
}

export default Logement