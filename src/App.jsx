import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Res from './components/Res';
import Commercial from './components/Commercial';
import Invest from './components/Invest';
import Rent from './components/Rent';
import Home from './components/Home';


const App = () => {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home />} />
        <Route path="/residential" element={<Res />} />
        <Route path="/commercial" element={<Commercial />} /> 
        <Route path="/Invest" element={<Invest />} /> 
        <Route path="/Rent" element={<Rent />} />
      </Routes>
    </Router>
  );
};

export default App;
