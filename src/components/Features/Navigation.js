import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='kasa-headerMenu'>
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/apropos">A Propos</NavLink>
    </nav>
  );
};

export default Navigation;