import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home'
import Error404 from './Error404/Error404';
import About from './About/About';
import Logement from './Logement/Logement';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App;
