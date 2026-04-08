import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ height: '30px', fill: '#38bdf8' }}>
            <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 79.8 368 69.2 368 56c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 13.2 7 23.8 17.7 29l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.8 0 5.6-.3 8.2-.7L128 416h384l71.8-192.7c2.6.4 5.3.7 8.2.7 26.5 0 48-21.5 48-48s-21.5-48-48-48z"/>
          </svg>
          <span>Mate<span style={{ color: '#38bdf8' }}>X</span></span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><button>Play</button></li>
        <li><Link to="/learn">Learn</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
