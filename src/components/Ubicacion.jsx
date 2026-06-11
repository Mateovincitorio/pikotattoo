import React from 'react'
import './ubicacion.css'
import GoogleReviews from './GoogleReviews.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';


const Ubicacion = () => {
  return (
    <>
    <div className="contenedor-ubicacion">
        <div className="ubicacion">
            <div className="header-ubicacion">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: 'rgb(208, 200, 92)' }}
              />
              <h2 className="titulo-ubicacion color">Location</h2>
            </div>
            <p className="color">Carrer de Joan Alcover, 36, Palma de Mallorca</p>
            <div className="maps">

            <a href="https://maps.app.goo.gl/puJpbGUqjwVKm66S9?g_st=iwb" target="_blank" rel="noopener noreferrer" className="color maps">
                See on Google Maps
            </a>
            <FontAwesomeIcon icon={faArrowRight} style={{color: 'rgb(208, 200, 92)',}} /> 
            </div>
        </div>
        <div className="horario">
            <div className="header-horarios">
                <FontAwesomeIcon icon={faClock} style={{ color: 'rgb(208, 200, 92)' }} />
                <h3 className="titulo-horarios color">
                    Working Hours
                </h3>
            </div>
            <div className="horario-content">
                <p className="color">Tuesday to Saturday</p>
                <p className="color">11:00 - 20:00</p>
            </div>
        </div>
        <div className="google">
            <GoogleReviews />
        </div>
    </div>
    </>
  )
}

export default Ubicacion