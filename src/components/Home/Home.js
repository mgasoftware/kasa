import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import logements from '../../datas/logements.json';

function Home() {
  return (
    <div className="App">
      <Header />
      <Main logements={logements}/>
      <Footer />
    </div>
  )
}

export default Home;