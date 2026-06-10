import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Changed to HashRouter

// Import your page components
import Home from './Home';
import Nutrition from './Nutrition';
import Calculator from './Calculator';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* The root URL shows the bakery landing page */}
        <Route path="/" element={<Home />} />
        
        {/* These define your two new routes */}
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </HashRouter>
  );
}
