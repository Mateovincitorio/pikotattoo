import React from 'react'
import './servicios.css'

const Servicios = () => {
  return (
    <>
    <div className="contenedor-servicios">
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/tattooMachine.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">CUSTOM TATTOOS</h2>
            </div>
            <p className="color">Each tattoo is a unique piece of art, crafted exclusively for you. We work together to bring your vision to life with precision and dedication.</p>
        </div>
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/tecnicas.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">ADVANCED TECHNIQUES</h2>
            </div>
            <p className="color">Specialist in advanced techniques including embroidery-style, realism, and precise fine-line work for high-level, detailed results.</p>
        </div>
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/salud.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">AFTERCARE</h2>
            </div>
            <p className="color">Absolute care about your tattoo long after you leave the chair and provide premium aftercare guidance to ensure your ink heals perfectly and stays vibrant.</p>
        </div>
        <div className="tattoo-personalizado">
            <div className="top-card">
            <img src="/profesional.png" alt="Tatuaje personalizado" className="imagen-tattoo" />
            <h2 className="titulo-servicios color">PROFESSIONAL SKILLS</h2>
            </div>
            <p className="color">Highly skilled and experienced in creating stunning tattoos with precision and attention to detail.</p>
        </div>
    </div>

    <img src="/proceso-tattoo.png" alt="Linea decorativa" className="proceso-tattoo" />
    </>
  )
}

export default Servicios