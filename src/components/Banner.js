import React from 'react';
import '../styles/Banner.css';
import { useLocation } from 'react-router-dom';

function Banner(props) {
  const link = useLocation();
  let isApropos = false;

  if(link.pathname === '/apropos'){
    isApropos = true;
  }
  else isApropos = false;
  return (
    <div className="kasa-mainInfo">
        <img src={props.background} alt="background" className="kasa-mainImg" />
        {!isApropos && <h1 className="kasa-mainText">Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner;