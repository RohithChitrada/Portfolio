import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'

const Navbar = ({isDarkTheme,toggleTheme}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
  return (
    <div className={`navbar ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <p><Link to='/'>CH</Link></p>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className='theme-toggle' onClick={toggleTheme}> {isDarkTheme ? '🌙' : '☀️'}</div>
      <div className='hamburger' onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  );
}

export default Navbar;
