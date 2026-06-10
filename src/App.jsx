import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from './Home';
import Nutrition from './Nutrition';
import Calculator from './Calculator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
}
