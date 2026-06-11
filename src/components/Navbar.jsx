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

  // Cierra el menú al hacer scroll LEER PARA ENTENDER
  useEffect(() => {
    const closeOnScroll = () => {
      const collapse = document.getElementById('navbarNavDropdown');
      const toggler = document.querySelector('.navbar-toggler');
      if (collapse && collapse.classList.contains('show')) {
        collapse.classList.remove('show');
        if (toggler) toggler.setAttribute('aria-expanded', 'false');
      }
    };
    window.addEventListener('scroll', closeOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', closeOnScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navbar-sticky ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <a className ={ ` navbar-brand Logo ${scrolled ? 'scrolled' : ''}`} href="/"><img className='logoimg' src={logo} alt="Logo" /></a>

{/*LEER PARA ENTENDER*/}
{/*AGREGO EL BOTON CON LAS 3 RAYITAS*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/*ESTE ES EL MENU DEL BOTON DE LAS 3 RAYITAS*/}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">Who I am</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar