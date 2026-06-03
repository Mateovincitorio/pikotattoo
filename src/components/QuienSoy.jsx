import React from 'react'
import './QuienSoy.css'

const QuienSoy = () => {
  return (
    <section className="quienSoy">
      <div className="quienSoy-body">
        <img src="/imgwhoami.png" alt="Pablo, tatuador" className='imgQuienSoy'/>
        <div className="quienSoy-text">
          <p className='pQuienSoy'>Soy Pablo, tatuador apasionado por convertir ideas y recuerdos en tatuajes con significado. Cada diseño nace de una conversación cercana, cuidando cada detalle para que la pieza sea una expresión auténtica de tu historia.</p>
          <p className='pQuienSoy'>Mi estilo abarca desde líneas limpias y minimalistas hasta trabajos detallados y realistas. Con experiencia y dedicación constante, ofrezco un servicio profesional, personalizado y cálido para quienes quieren llevar su historia en la piel.</p>
        </div>
      </div>
    </section>
  )
}

export default QuienSoy