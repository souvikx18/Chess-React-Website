import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import { initLenis } from './lenis';

function App() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
