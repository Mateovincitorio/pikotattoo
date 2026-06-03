import React from 'react'
import './servicios.css'

const Servicios = () => {
  return (
    <>
    <div className="contenedor-servicios">
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/tattooMachine.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">Tatuajes personalizados</h2>
            </div>
            <p className="color">Cada tatuaje es una obra de arte única, diseñada exclusivamente para ti. Trabajamos juntos para crear un diseño que refleje tu personalidad y estilo.</p>
        </div>
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/tecnicas.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">Tatuajes personalizados</h2>
            </div>
            <p className="color">Cada tatuaje es una obra de arte única, diseñada exclusivamente para ti. Trabajamos juntos para crear un diseño que refleje tu personalidad y estilo.</p>
        </div>
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/salud.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">Tatuajes personalizados</h2>
            </div>
            <p className="color">Cada tatuaje es una obra de arte única, diseñada exclusivamente para ti. Trabajamos juntos para crear un diseño que refleje tu personalidad y estilo.</p>
        </div>
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/profesional.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">Tatuajes personalizados</h2>
            </div>
            <p className="color">Cada tatuaje es una obra de arte única, diseñada exclusivamente para ti. Trabajamos juntos para crear un diseño que refleje tu personalidad y estilo.</p>
        </div>
    </div>

    <img src="/proceso-tattoo.png" alt="Linea decorativa" className="proceso-tattoo" />
    </>
  )
}

export default Servicios