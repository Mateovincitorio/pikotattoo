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
              <h2 className="titulo-ubicacion color">Ubicación</h2>
            </div>
            <p className="color">Carrer de Joan Alcover, 36, Palma de Mallorca</p>
            <div className="maps">

            <a href="https://www.google.com/maps/place/Tattoo+Pikotatto/@39.7182785,2.8885062,2346m/data=!3m2!1e3!5s0x1297c5c9eef7ce27:0x363cbd511f7a8e8f!4m10!1m2!2m1!1spiko+tattoo+mallorca!3m6!1s0x1297c5aabdd0e84f:0x35261b043dcdd7ff!8m2!3d39.7179154!4d2.9033549!15sChRwaWtvIHRhdHRvbyBtYWxsb3JjYVoWIhRwaWtvIHRhdHRvbyBtYWxsb3JjYZIBC3RhdHRvb19zaG9wmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIxc2JGTlhlREJYV0VKbVZHNWFOazFITVU1alZUQjNWVmhPYmxwWVl4QULgAQD6AQQIQRAz!16s%2Fg%2F11mrjg0mwj?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="color maps">
                Ver en Google Maps
            </a>
            <FontAwesomeIcon icon={faArrowRight} style={{color: 'rgb(208, 200, 92)',}} /> 
            </div>
        </div>
        <div className="horario">
            <div className="header-horarios">
                <FontAwesomeIcon icon={faClock} style={{ color: 'rgb(208, 200, 92)' }} />
                <h3 className="titulo-horarios color">
                    Horarios
                </h3>
            </div>
            <div className="horario-content">
                <p className="color">Martes a Sábado</p>
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