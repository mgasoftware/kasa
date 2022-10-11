import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home/Home'
import Error404 from './Error404/Error404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App;
