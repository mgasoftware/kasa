import React from 'react'
import {Link} from 'react-router-dom'

function Navigation() {
  return (
    <nav className='kasa-headerMenu'>
        <Link to="/" style={{textDecoration: 'underline'}}>Accueil</Link>
        <Link to="/apropos">A Propos</Link>
    </nav>
  )
}

export default Navigation;