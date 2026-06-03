import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Trabajos from './components/Trabajos.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import Servicios from './components/Servicios.jsx'
import QuienSoy from './components/QuienSoy.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ubicacion />
      <Servicios />
      <QuienSoy />
    </>
  )
}

export default App
