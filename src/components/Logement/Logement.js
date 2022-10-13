import React from 'react'

import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Lightbox from '../Features/Lightbox';
import "../../styles/Logement.css"
import logements from '../../datas/logements.json'
import { Navigate, useParams } from 'react-router';

function Logement() {
  const id = useParams();
  const logementSelected = logements.find(logement => logement.id === id.id);

  if(logementSelected === undefined) {
    return <Navigate to="/error" />
  }

  return (
    <div className="kasa-logement">
        <Header />
        <Lightbox images={logementSelected.pictures} title={logementSelected.title}/>
        <div className="kasa-logementInfo">
          <h1 className="kasa-logementTitle">{logementSelected.title}</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Logement