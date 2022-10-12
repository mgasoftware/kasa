import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const link = useLocation();
  let location = '';

  if(link.pathname === '/apropos'){
    location = 'apropos';
  }
  else if (link.pathname ==='/'){
    location = ''
  }
  else location = 'none'
  return (
    <nav className='kasa-headerMenu'>
      {location === ''&&
        <div>
          <Link to="/" style={{ textDecoration: 'underline' }}>Accueil</Link>
          <Link to="/apropos">A Propos</Link>
        </div>}
      {location === 'apropos'&&
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/apropos" style={{ textDecoration: 'underline' }}>A Propos</Link>
        </div>}
      {location === 'none' &&
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/apropos">A Propos</Link>
        </div>}
    </nav>
  )
}

export default Navigation;