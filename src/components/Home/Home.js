import React from 'react';
import Header from '../Features/Header'
import Cards from '../Features/Cards';
import Footer from '../Features/Footer';
import logements from '../../datas/logements.json';

function Home() {
  return (
    <div className="App">
      <Header />
      <Cards logements={logements}/>
      <Footer />
    </div>
  )
}

export default Home;