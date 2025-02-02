import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./components/Contact";
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <img
        src='./TitleCard.jpeg'
        alt='background'
        className='background-image'
      />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;
