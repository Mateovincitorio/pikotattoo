import React, { useEffect, useState } from 'react'
import Hero from './Hero.jsx'
import logo from '/logo.png'
import './navbar.css'


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navbar-sticky ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <a className="navbar-brand Logo" href="#"><img className='logoimg' src={logo} alt="Logo" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#trabajos">My work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My specialties</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Who I am</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar