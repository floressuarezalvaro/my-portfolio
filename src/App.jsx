import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ResponsiveAppBar from './components/Navbar';

function App() {
  return (
    <Router>
    <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/linkedin" element={<LinkedIn />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
