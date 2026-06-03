import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Trabajos from './components/Trabajos.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import Servicios from './components/Servicios.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ubicacion />
      <Servicios />
    </>
  )
}

export default App
