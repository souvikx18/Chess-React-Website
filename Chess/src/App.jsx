import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About";
import Learn from "./components/Learn";
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
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </Router>
  )
}

export default App
