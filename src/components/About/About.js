import React from 'react'

import '../../styles/About.css';
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Banner from '../Banner';
import Dropdown from '../Features/Dropdown';
import background from '../../assets/aboutBackground.png';

function About() {
  return (
    <div>
      <Header />
      <div className="kasa-about">
        <Banner background={background} />
        <main>
          <Dropdown title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
          <Dropdown title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
          <Dropdown title="Sécurité" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
          <Dropdown title="Fiabilité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default About