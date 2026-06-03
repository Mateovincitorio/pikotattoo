import React from 'react'
import './trabajos.css'

const images = [
  '/realismo.png',
  '/realismo.png',
  '/realismo.png',
  '/realismo.png',
  '/realismo.png',
  '/realismo.png'
]

const figcaption = [
  'Realismo',
  'tradicional',
  'japones',
  'dotwork',
  'fineline',
  'abstracto'
]

const Trabajos = () => {
  return (
    <section className="works-section">
      <h2 className="works-title">Trabajos</h2>
      <div className="works-grid" id="trabajos">
        {images.map((src, i) => (
          <figure className="work-card" key={i}>
            <img src={src} className="work-img" />
            <figcaption className="work-caption">{figcaption[i]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Trabajos